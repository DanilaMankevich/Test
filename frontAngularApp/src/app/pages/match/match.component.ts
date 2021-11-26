import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMatch } from '../../types';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  @Input() newMatches: any;
  matches: IMatch[];

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:3000/admin/matches/')
      .subscribe((matches: any) => {
        this.matches = matches;
      });
  }
}
