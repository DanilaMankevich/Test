import { Component, OnInit } from '@angular/core';
import { SendFormService } from 'src/app/services/send-form.service';

@Component({
  selector: 'app-add-competition-container',
  templateUrl: './add-competition-container.component.html',
})
export class AddCompetitionContainerComponent implements OnInit {
  constructor(private sendFormService: SendFormService) {}

  ngOnInit(): void {}
  onAddCompetition(competition: any) {
    this.sendFormService.addCompetition(competition).subscribe();
    return true;
  }
}
