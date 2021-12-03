import { Component, OnInit } from '@angular/core';
import { SendFormService } from 'src/app/services/send-form.service';

@Component({
  selector: 'app-add-match-container',
  templateUrl: './add-match-container.component.html',
})
export class AddMatchContainerComponent implements OnInit {
  constructor(private sendFormService: SendFormService) {}

  ngOnInit(): void {}
  onAddMatch(match: any) {
    this.sendFormService.addMatch(match).subscribe();
    return true;
  }
}
