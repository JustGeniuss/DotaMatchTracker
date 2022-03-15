import { Module } from "@nestjs/common";
import { MatchesModule } from "./matches/matches.module";
import { SteamApiModule } from "./steam-api/steam-api.module";
import { HeroesModule } from "./heroes/heroes.module";
import { PlayersModule } from "./players/players.module";
import { UtilsModule } from "./utils/utils.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Matches'),
    MatchesModule,
    SteamApiModule,
    HeroesModule,
    PlayersModule,
    UtilsModule,
  ]
})
export class AppModule {}
