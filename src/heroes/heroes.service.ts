import { Injectable } from "@nestjs/common";
import { PlayersService } from "src/players/players.service";
import { SteamApiService } from "src/steam-api/steam-api.service";
import { UtilsService } from "src/utils/utils.service";

@Injectable()
export class HeroesService {
  constructor(
    private steamApiService: SteamApiService,
    private utilsService: UtilsService
  ) {}
 
  async getHeroes(id: number) {
    const heroes = await this.steamApiService.getAllHeroes();
    const arrayOfHeroes = heroes.result.heroes;
    const {
      scoreboard: { radiant, dire },
    } = await this.steamApiService.getOneMatch(id);
    const radiantPlayers = this.utilsService.addNewFieldInEachObjectOfArray(
      [radiant.players, "hero_id"],
      [arrayOfHeroes, "id"],
      'hero_name', 'name'
    );
    const direPlayers = this.utilsService.addNewFieldInEachObjectOfArray(
      [dire.players, "hero_id"],
      [arrayOfHeroes, "id"],
      'hero_name', 'name'
    );
    return { radiantPlayers, direPlayers };
  }



  async getBans(id) {
    const heroes = await this.steamApiService.getAllHeroes();
    console.log(heroes)
    const arrayOfHeroes = heroes.result.heroes;
    const {
      scoreboard: { radiant, dire },
    } = await this.steamApiService.getOneMatch(id);
    const radiantBans = this.utilsService.addNewFieldInEachObjectOfArray(
      [radiant.bans, "hero_id"],
      [arrayOfHeroes, "id"],
      'hero_ban', 'name'
    );
    const direBans = this.utilsService.addNewFieldInEachObjectOfArray(
      [dire.bans, "hero_id"],
      [arrayOfHeroes, "id"],
      'hero_ban', 'name'
    );
      return {radiantBans, direBans}

  }
}
