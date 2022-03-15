import { Injectable } from "@nestjs/common";
import { HeroesApi } from "src/matches/dto/heroes.dto";
import { Game, SteamApi } from "src/matches/dto/steam-api.dto";
import fetch from "node-fetch";

@Injectable()
export class SteamApiService {
  steamApi;
  constructor() {
    this.getSteamApi();
    console.log(this.steamApi);
  }

  async getAllHeroes() {
    return (await (
      await fetch(
        "https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=18A5EECA166EE7B52FB2426BA9D18F63"
      )
    ).json()) as HeroesApi;
  }

  async getSteamApi() {
    this.steamApi = await (
      await fetch(
        "https://api.steampowered.com/IDOTA2Match_570/GetLiveLeagueGames/v0001/?key=18A5EECA166EE7B52FB2426BA9D18F63"
      )
    ).json();
    setInterval(async () => {
      this.steamApi = await (
        await fetch(
          "https://api.steampowered.com/IDOTA2Match_570/GetLiveLeagueGames/v0001/?key=18A5EECA166EE7B52FB2426BA9D18F63"
        )
      ).json();
    }, 12312300);
    
  }

  async getOneMatch(id) {
    const SteamApi =  this.steamApi as SteamApi;
    return SteamApi.result.games.find(
      (match) => match.match_id === +id
    ) as Game;
  }
}
