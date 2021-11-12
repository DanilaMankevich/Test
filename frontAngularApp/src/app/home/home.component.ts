import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IMatch } from '../types';


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
  queryParams: { competitionId: string; seasonId: string }
  constructor(public http: HttpClient, public route: ActivatedRoute, private router: Router) {}

  

  ngOnInit(): void {
    this.http.get('http://localhost:3000/admin/seasons/').subscribe((data) => {
      this.seasons = data;
    });
    this.http
      .get('http://localhost:3000/admin/competitions/')
      .subscribe((data) => {
        this.competitions = data;
      });
    this.http.get('http://localhost:3000/admin/matches/').subscribe((data) => {
      //this.matches = data;
      //console.log(this.matches);
    });
    this.route.queryParams.subscribe((data: any): any => {
      (this.queryParams = data), (this.seasonId = data.seasonId), (this.competitionId = data.competitionId);
      console.log(this.queryParams)
    });
    this.router.navigate(['/search'], {
      queryParams: {
        competitionId: this.competitionId,
        seasonId: this.seasonId,
      },
    
  })
}

 
  onChangeCompetition = ($event: any): void => {
    this.competitionId = $event._id;

    this.http
      .get(
        `http://localhost:3000/admin/search?competition=${this.competitionId}`
      )
      .subscribe((data: any) => {
        console.log(data);
        data.map((matches: any) => {
          this.newMatches.push(matches);
        });
      });

    // let newMatches = this.matches.filter((match: { competitionId: string; })=>{

    //   return match.competitionId == this.competitionId

    // })

    //console.log(this.newMatches)
  };

  onChangeSeason = ($event: any): void => {
    this.seasonId = $event._id;
    this.http
      .get(
        `http://localhost:3000/search?competition=${this.competitionId}&season=${this.queryParams.seasonId}`
      )
      .subscribe((data: any) => {
        console.log(data);
        data.map((matches: any) => {
          this.newMatches.push(matches);
        });
      });

    // let newMatches = this.matches.filter((match: { seasonId: string; })=>{

    //   return match.seasonId == this.seasonId

    // })
    //console.log(newMatches)
  };
}
