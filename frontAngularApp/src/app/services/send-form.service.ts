import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SendFormService {

  constructor(private http: HttpClient) {
  }

  addCompetition(competition: any) {
    let headers = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post('http://localhost:3000/competitions/competition',
      JSON.stringify(competition),
      headers)
  }

  addSeason(season: any) {
    let headers = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post('http://localhost:3000/seasons/season',
      JSON.stringify(season),
      headers)
  }

  addMatch(match: any) {
    let headers = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post('http://localhost:3000/matches/match',
      JSON.stringify(match),
      headers)
  }

}
