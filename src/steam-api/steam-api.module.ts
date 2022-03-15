import { Module } from '@nestjs/common';
import { HeroesModule } from 'src/heroes/heroes.module';
import { PlayersModule } from 'src/players/players.module';
import { SteamApiService } from './steam-api.service';

@Module({
  providers: [SteamApiService],
  exports: [SteamApiService]
})
export class SteamApiModule {}
