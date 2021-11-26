import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IMatch } from '../../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedSeason: number;
  selectedCompetition: number;
  seasons: any;
  competitions: any;
  competitionId: string;
  seasonId: string;
  matches: IMatch[];
  newMatches: IMatch[] = [];
  filterBy: string = 'normal';
  filter: { competitionId: string; seasonId: string };

  constructor(
    public http: HttpClient,
    public route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:3000/admin/seasons/')
      .subscribe((seasons: any): any => {
        this.seasons = seasons;
      });
    this.http
      .get('http://localhost:3000/admin/competitions/')
      .subscribe((competitions: any): any => {
        this.competitions = competitions;
      });
    this.http
      .get('http://localhost:3000/admin/matches/')
      .subscribe((matches: any): any => {
        this.matches = matches;
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
        console.log(data);
        data.map((matches: any) => {
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
      });
  };

  private navigateWithQueryParams() {
    this.router.navigate([''], {
      queryParamsHandling: 'merge',
      queryParams: this.filter,
    });
  }
}
