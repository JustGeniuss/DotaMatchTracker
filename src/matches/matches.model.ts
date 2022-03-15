import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Hero } from "./dto/heroes.dto";
import { InGamePlayer } from "./dto/steam-api.dto";
import { Time } from "./dto/time.dto";



@Schema()
export class Match{
  @Prop()
  matchId: Number;
  @Prop([InGamePlayer])
  playersRadiant: InGamePlayer[];
  @Prop([InGamePlayer])
  playersDire: InGamePlayer[];
  @Prop()
  deltaNetworth: Number;
  @Prop([Hero])
  bansRadiant: Hero[];
  @Prop([Hero])
  bansDire: Hero[];
  @Prop()
  duration: Time;
}

export const MatchesSchema = SchemaFactory.createForClass(Match);





