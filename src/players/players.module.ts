import { Module } from '@nestjs/common';
import { HeroesModule } from 'src/heroes/heroes.module';
import { SteamApiModule } from 'src/steam-api/steam-api.module';
import { UtilsModule } from 'src/utils/utils.module';
import { PlayersService } from './players.service';

@Module({
  providers: [PlayersService],
  imports: [HeroesModule ,SteamApiModule, UtilsModule],
  exports: [PlayersService]

})
export class PlayersModule {}
