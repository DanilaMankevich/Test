import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SendFormService } from 'src/app/services/send-form.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.scss'],
})
export class AddMatchComponent implements OnInit {
  homeTeamName: string;
  awayTeamName: string;
  scoreHomeTeam: number;
  scoreAwayTeam: number;
  date: Date;
  competitions: any;
  seasons: any;
  seasonId: any;
  competitionId: any;
  @Output() private addMatch = new EventEmitter<any>();

  constructor(
    private sendFormService: SendFormService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:3000/competitions/')
      .subscribe((data) => {
        this.competitions = data;
      });
    this.http.get('http://localhost:3000/seasons/').subscribe((data) => {
      this.seasons = data;
    });
  }

  onChangeCompetition = ($event: any): void => {
    this.competitionId = $event._id;
  };
  onChangeSeason = ($event: any): void => {
    this.seasonId = $event._id;
  };

  MatchAdd() {
    const match = {
      homeTeamName: this.homeTeamName,
      awayTeamName: this.awayTeamName,
      scoreHomeTeam: this.scoreHomeTeam,
      scoreAwayTeam: this.scoreAwayTeam,
      date: this.date,
      competitionId: this.competitionId,
      seasonId: this.seasonId,
    };

    if (!match.homeTeamName) {
      console.log('enter 1st team name');
      return false;
    } else if (!match.awayTeamName) {
      console.log('enter 2st team name');
      return false;
    } else if (!match.scoreHomeTeam) {
      console.log('enter 1st team score');
      return false;
    } else if (!match.scoreAwayTeam) {
      console.log('enter 2st team score');
      return false;
    } else if (!match.date) {
      console.log('enter 2st team score');
      return false;
    }

    this.addMatch.emit(match);
  }
}
