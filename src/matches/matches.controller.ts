import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PlayersService } from "src/players/players.service";
import { SteamApiService } from "src/steam-api/steam-api.service";
import { Game } from "./dto/steam-api.dto";
import { Match } from "./matches.model";
import { MatchesService } from "./matches.service";

@Controller("matches")
export class MatchesController {
  constructor(private matchesService: MatchesService) {}

  @Get(":id")
  async getOneMatch(@Param() { id }) {
    await this.matchesService.create({
      matchId: await this.matchesService.getMatchId(id),
      PlayersRadiant:await this.matchesService.getSightPlayersInGame(id, 'radiant'),
      PlayersDire:await this.matchesService.getSightPlayersInGame(id, 'dire'), 
      deltaNetworth: await this.matchesService.getDeltaNetworth(id),
      bansRadiant: await this.matchesService.getRadiantBans(id),
      bansDire: await this.matchesService.getDireBans(id),
      duration: await this.matchesService.getDuration(id),
      // hero_bans: await this.matchesService.getBans(id),
      // players: await this.matchesService.getAllPlayers(id),
    })
   return {
      duration: await this.matchesService.getDuration(id),
      radiant_bans: await this.matchesService.getRadiantBans(id),
      dire_bans: await this.matchesService.getDireBans(id),
      deltaNetworth: await this.matchesService.getDeltaNetworth(id),
      players: await this.matchesService.getAllPlayers(id),
    };
  }
    
  }

