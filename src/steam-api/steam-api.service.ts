import { Injectable } from "@nestjs/common";
import { HeroesApi } from "src/matches/dto/heroes.dto";
import { Game, SteamApi } from "src/matches/dto/steam-api.dto";
import fetch from "node-fetch";
const fs = require('fs');
const path = require('path');

@Injectable()
export class SteamApiService {
  steamApi;
  constructor() {
    this.getSteamApi();
    console.log(this.steamApi);
  }
  

  // async getAllHeroes() {
  //   console.log('1')
  //   let obj;
  //   console.log(path.join(__dirname))
  //   fs.readFile(path.join('heroes.json'), 'utf8', function (err, data) {
  //     if (err) throw err;
  //     obj = JSON.parse(data)
  //     console.log(obj)
  //     return;
  //   });
  //   // console.log(obj)
  //   return obj;
  // }
  async getAllHeroes() {
    return (await (
      await fetch(
        "https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=18A5EECA166EE7B52FB2426BA9D18F63"
      )
    ).json()) as HeroesApi;
  }

  async getSteamApi() {
      await fs.readFile(path.join('src', 'mock',  'steamApi.json'), 'utf8',(err, data) => {
        if (err) throw err;
        this.steamApi = JSON.parse(data)
        return;
      });
    setInterval(async () => {
      
      await fs.readFile(path.join('src', 'mock',  'steamApi.json'), 'utf8', (err, data) => {
        if (err) throw err;
        this.steamApi = JSON.parse(data)
        return;
      });
    }, 60000);
  }

  async getOneMatch(id) {
    const SteamApi =  this.steamApi as SteamApi;
    console.log(SteamApi)
    return SteamApi.result.games.find(
      (match) => match.match_id === +id
    ) as Game;
  }
}
