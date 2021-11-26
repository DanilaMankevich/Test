import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CheckFormService } from '../../services/check-form.service';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrls: ['./add-competition.component.scss'],
})

export class AddCompetitionComponent implements OnInit {
  @Output() private addCompetition = new EventEmitter<any>();
  competitionName: string;

  constructor(private checkForm: CheckFormService) {}

  ngOnInit(): void {}

  competitionAdd() {
    const competition = {
      competitionName: this.competitionName,
    };
    if (!this.checkForm.checkValue(competition.competitionName)) {
      console.log('enter competition name');
      return false;
    }
    this.addCompetition.emit(competition);
  }
}
