import { Injectable } from '@nestjs/common';
import { HeroesService } from 'src/heroes/heroes.service';
import { SteamApiService } from 'src/steam-api/steam-api.service';
import { UtilsService } from 'src/utils/utils.service';

@Injectable()
export class PlayersService {
  constructor(private steamApiService: SteamApiService,
    private utilsService: UtilsService,
    private heroesService: HeroesService) {}

  async getPlayers(id: number) {
    const {
      players
    } = await this.steamApiService.getOneMatch(id);
    const { radiantPlayers, direPlayers } = await this.heroesService.getHeroes(id);
    const radPlayers = this.utilsService.addNewFieldInEachObjectOfArray(
      [radiantPlayers, "account_id"],
      [players, "account_id"],
      'Nickmame', 'name'
    );
    
    const dirPlayers = this.utilsService.addNewFieldInEachObjectOfArray(
      [direPlayers, "account_id"],
      [players, "account_id"],
      'Nickname', 'name'
    );

    return { radPlayers, dirPlayers };

    }


}
