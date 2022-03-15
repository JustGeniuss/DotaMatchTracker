import { Module } from '@nestjs/common';
import { SteamApiModule } from 'src/steam-api/steam-api.module';
import { UtilsModule } from 'src/utils/utils.module';
import { HeroesService } from './heroes.service';

@Module({
  providers: [HeroesService],
  imports: [UtilsModule, SteamApiModule],
  exports: [HeroesService]

})
export class HeroesModule {}
