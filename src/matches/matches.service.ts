import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { HeroesService } from "src/heroes/heroes.service";
import { PlayersService } from "src/players/players.service";
import { SteamApiService } from "src/steam-api/steam-api.service";
import { Game } from "./dto/steam-api.dto";
import { Match } from "./matches.model";
import { Model } from 'mongoose';
import { throws } from "assert";
@Injectable()
export class MatchesService {

  constructor(private steamApiService: SteamApiService,
    private playersService: PlayersService,
    private heroesService: HeroesService,
    @InjectModel(Match.name) private matchModel: Model<Match>
    ) {}

  countNetWorthDelta(players) {
    return players.reduce(
      (previousValue, currentValue) => previousValue + currentValue.net_worth,
      0
    );
  }

  async getDeltaNetworth(id) {
    const {
      scoreboard: { radiant, dire },
    } = await this.steamApiService.getOneMatch(id);

    return (
      this.countNetWorthDelta(radiant.players) -
      this.countNetWorthDelta(dire.players)
    );
  };


  async checkOneMatch(id) {
    return await this.steamApiService.getOneMatch(id) as Game;
    
  }

  async getAllPlayers(id) {
    return await this.playersService.getPlayers(id);
  }

  async getSightPlayersInGame(id, side) {
    return (await this.steamApiService.getOneMatch(id) as Game).scoreboard[side].players
  }

  async getMatchId(id) {
    return (await this.steamApiService.getOneMatch(id) as Game).match_id
  }


  async getDuration(id) {
    let seconds = (await this.steamApiService.getOneMatch(id) as Game).scoreboard.duration;
    const hours = Math.floor(seconds/3600);
    seconds = seconds - hours * 3600
    const minutes = Math.floor(seconds/60);
    seconds =  seconds - minutes * 60
    return  {hours, minutes, seconds}
  }


  async getRadiantBans(id) {
    return (await this.heroesService.getBans(id)).radiantBans
  }
  async getDireBans(id) {
    return (await this.heroesService.getBans(id)).direBans
  }
  async create(body) {
    const createdMatch = new this.matchModel(body);
    return createdMatch.save()
  }
}
