import { Component, OnInit } from '@angular/core';
import { CheckFormService } from '../../check-form.service';
import { SendFormService } from 'src/app/send-form.service';
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
  scoreHomeTeam: Number;
  scoreAwayTeam: Number;
  date: Date;
  competitions: any;
  seasons: any;
  selectedCompetition: number;
  selectedSeason: number;
  seasonId: any;
  competitionId: any;
  today = new Date();

  constructor(
    private checkForm: CheckFormService,
    private sendFormService: SendFormService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:3000/admin/competitions/').subscribe((data) => {
        this.competitions = data;
      });
    this.http.get('http://localhost:3000/admin/seasons/').subscribe((data) => {
      this.seasons = data;
    });
  }
  onChangeCompetition = ($event: any): void => {
    this.competitionId = $event._id;
  };
  onChangeSeason = ($event: any): void => {
    this.seasonId = $event._id;
  };
  MatchAddClick() {
    const match = {
      homeTeamName: this.homeTeamName,
      awayTeamName: this.awayTeamName,
      scoreHomeTeam: this.scoreHomeTeam,
      scoreAwayTeam: this.scoreAwayTeam,
      date: this.date,
      competitionId: this.competitionId,
      seasonId: this.seasonId,
    };

    if (!this.checkForm.checkMatchName1(match.homeTeamName)) {
      console.log('enter 1st team name');
      return false;
    } else if (!this.checkForm.checkMatchName2(match.awayTeamName)) {
      console.log('enter 2st team name');
      return false;
    } else if (!this.checkForm.checkScoreName1(match.scoreHomeTeam)) {
      console.log('enter 1st team score');
      return false;
    } else if (!this.checkForm.checkScoreName2(match.scoreAwayTeam)) {
      console.log('enter 2st team score');
      return false;
    } else if (!this.checkForm.checkDate(match.date)) {
      console.log('enter 2st team score');
      return false;
    }

    this.sendFormService.addMatch(match).subscribe((data: any) => {
      console.log(data);
      if (!data.success) {
        console.log('!!!не получилось');
      } else {
        console.log('match add');
        this.router.navigate(['/']);
      }
    });
  }
}
