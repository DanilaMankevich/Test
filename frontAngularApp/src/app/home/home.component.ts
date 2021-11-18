import { Component, OnInit } from '@angular/core';
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
  queryParams: { competitionId: string; seasonId: string };
  constructor(
    public http: HttpClient,
    public route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/admin/seasons/').subscribe((data:any): any => {
      this.seasons = data;
    });
    this.http
      .get('http://localhost:3000/admin/competitions/')
      .subscribe((data:any): any => {
        this.competitions = data;
      });
    this.http.get('http://localhost:3000/admin/matches/').subscribe((data:any): any => {
      //this.matches = data;
      //console.log(this.matches);
    });
    this.route.queryParams.subscribe((data: any): any => {
      this.competitionId = data.competitionId,
      this.queryParams = data,
      this.seasonId = data.seasonId;
      console.log(this.queryParams);
    });


  }

  onChangeCompetition = ($event: any): void => {
    this.competitionId = $event._id;
    this.http
      .get(
        `http://localhost:3000/admin/?competition=${this.competitionId}`
      )
      .subscribe((data: any) => {
        console.log(data);
        data.map((matches: any) => {
          this.newMatches.push(matches);
        });
        this.queryParams.competitionId = this.competitionId
        this.navigateWithQueryParams()
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
        `http://localhost:3000/admin/?competition=${this.competitionId}&season=${this.seasonId}`
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
  private navigateWithQueryParams(){
    this.router.navigate([''],{
      queryParamsHandling: 'merge'
    })
  }
}
