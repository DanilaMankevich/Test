import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SendFormService {
  headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  addCompetition(competition: any) {
    return this.http.post(
      'http://localhost:3000/competitions/competition',
      JSON.stringify(competition),
      this.headers
    );
  }

  addSeason(season: any) {
    return this.http.post(
      'http://localhost:3000/seasons/season',
      JSON.stringify(season),
      this.headers
    );
  }

  addMatch(match: any) {
    return this.http.post(
      'http://localhost:3000/matches/match',
      JSON.stringify(match),
      this.headers
    );
  }
}
