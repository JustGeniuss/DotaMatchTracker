export class SteamApi {
  readonly result: Result;

}


export class Result {
  readonly games: Game[];
  readonly status: Number;
}


export class Game {
  readonly players: Player[];
  readonly radiant_team: Team;
  readonly dire_team: Team;
  readonly lobby_id: number;
  readonly match_id: number;
  readonly spectators: number;
  readonly league_id: number;
  readonly league_node_id: number;
  readonly stream_delay_s: number;
  readonly radiant_series_wins: number;
  readonly dire_series_wins: number;
  readonly series_type: number;
  readonly scoreboard: Scoreboard
}


export class Player {
  readonly account_id: number;
  readonly name: string;
  readonly hero_id: number;
  readonly team: number;
}

export class Team {
  readonly team_name: string;
  readonly team_id: number;
  readonly team_logo: string;
  readonly complete: boolean;
}


export class Scoreboard {
  readonly duration: number;
  readonly roshan_respawn_timer: number;
  readonly radiant: Sight;
  readonly dire: Sight;
}

export class Sight {
  readonly score: number;
  readonly tower_state: number;
  readonly barracks_state: number;
  readonly picks: Hero[];
  readonly bans: Hero[];
  readonly players: InGamePlayer[];
  readonly abilities: Ability[];
}


export class InGamePlayer {
  
readonly player_slot:number;
 readonly account_id:number; 
 readonly hero_id: number;
readonly kills:number;
readonly death:number;
 readonly assists:number;
 readonly last_hits: number;
readonly denies:number;
 readonly gold: number;
 readonly level:number;
 readonly gold_per_min:number; 
readonly xp_per_min: number;
 readonly ultimate_state:number;
 readonly ultimate_cooldown:number;
 readonly item0:number;
 readonly item1: number;
 readonly item2: number;
 readonly item3: number;
 readonly item4: number;
 readonly item5: number;
 readonly respawn_timer:number;
 readonly position_x: number;
 readonly position_y: number;
 readonly net_worth: number;
}

export class Ability {
  readonly ability_id: number;
  readonly abiliry_level: number;
}


export class Hero {
  readonly hero_id: number;
}