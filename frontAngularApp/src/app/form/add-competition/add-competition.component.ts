import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CheckFormService} from '../../check-form.service';
import {SendFormService} from 'src/app/send-form.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrls: ['./add-competition.component.scss']
})
export class AddCompetitionComponent implements OnInit {
  @Output() private send = new EventEmitter<any>();
  competitionName: string

  constructor(private checkForm: CheckFormService, private sendFormService: SendFormService, private router: Router) {
  }

  ngOnInit(): void {
  }

  competitionAdd() {
    const competition = {
      competitionName: this.competitionName
    }
    if (!this.checkForm.checkValue(competition.competitionName)) {
      console.log('enter competition name')
      return false
    }

    this.sendFormService.addCompetition(competition).subscribe()
    return this.router.navigate(['/'])
  }

}
