import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { match } from "assert";
import { HeroesModule } from "src/heroes/heroes.module";
import { PlayersModule } from "src/players/players.module";
import { SteamApiModule } from "src/steam-api/steam-api.module";
import { MatchesController } from "./matches.controller";
import { Match, MatchesSchema } from "./matches.model";
import { MatchesService } from "./matches.service";

@Module({
  controllers: [MatchesController],
  providers: [MatchesService],
  imports: [
    MongooseModule.forFeature([{ name: Match.name, schema: MatchesSchema }]),
    PlayersModule, SteamApiModule, HeroesModule],
})
export class MatchesModule {}
