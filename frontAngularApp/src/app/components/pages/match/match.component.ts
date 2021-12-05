import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMatch } from '../../../models/types';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  @Input() newMatches: IMatch[];

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
  }
}
