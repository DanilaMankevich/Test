export interface IMatch {
  homeTeamName: string;
  awayTeamName: string;
  scoreHomeTeam?: Number;
  scoreAwayTeam?: Number;
  date: Date;
}
export interface ICompetition {
    name: string,
    seasons?: ISeason[]
}

export interface ISeason {
    name: string,
    matches?: IMatch[]
}

