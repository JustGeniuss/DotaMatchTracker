export class HeroesApi {
  readonly result: Result;
  readonly status: number;
  readonly count: number;
}

export class Result{
  readonly heroes: Hero[];
}

export class Hero {
  readonly name: string;
  readonly id: number
}
