import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrls: ['./add-competition.component.scss'],
})
export class AddCompetitionComponent implements OnInit {
  @Output() private addCompetition = new EventEmitter<any>();
  competitionName: string;

  constructor() {}

  ngOnInit(): void {}

  competitionAdd() {
    const competition = {
      competitionName: this.competitionName,
    };
    if (!competition.competitionName) {
      console.log('enter competition name');
      return false;
    }
    this.addCompetition.emit(competition);
  }
}
