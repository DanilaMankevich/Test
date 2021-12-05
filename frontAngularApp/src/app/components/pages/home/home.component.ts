import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IMatch } from '../../../models/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  seasons: any;
  competitions: any;
  competitionId: string;
  seasonId: string;
  newMatches: IMatch[] = [];
  filter: { competitionId: string; seasonId: string };

  constructor(
    public http: HttpClient,
    public route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:3000/seasons/')
      .subscribe((seasons: any): any => {
        this.seasons = seasons;
      });
    this.http
      .get('http://localhost:3000/competitions/')
      .subscribe((competitions: any): any => {
        this.competitions = competitions;
      });
    this.route.queryParams.subscribe((params: any): any => {
      this.filter = params;
    });
  }

  onChangeCompetition = (competitionEvent: any): void => {
    this.competitionId = competitionEvent._id;
    this.http
      .get(`http://localhost:3000/admin/?competitionId=${this.competitionId}`)
      .subscribe((data: any) => {
        data.forEach((matches: any) => {
          this.newMatches.push(matches);
        });
        this.filter = { ...this.filter, competitionId: this.competitionId };
        this.navigateWithQueryParams();
      });
  };

  onChangeSeason = (seasonEvent: any): void => {
    this.seasonId = seasonEvent._id;
    this.http
      .get(
        `http://localhost:3000/admin/?competitionId=${this.competitionId}&seasonId=${this.seasonId}`
      )
      .subscribe((data: any) => {
        this.newMatches = data;
        this.filter = { ...this.filter, competitionId: this.competitionId, seasonId: this.seasonId };
        this.navigateWithQueryParams();
      });

  };

  private navigateWithQueryParams() {
    this.router.navigate([''], {
      queryParamsHandling: 'merge',
      queryParams: this.filter,
    });
  }
}
