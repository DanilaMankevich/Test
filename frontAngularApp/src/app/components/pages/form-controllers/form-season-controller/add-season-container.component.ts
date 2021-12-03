import { Component, OnInit } from '@angular/core';
import { SendFormService } from 'src/app/services/send-form.service';

@Component({
  selector: 'app-add-season-container',
  templateUrl: './add-season-container.component.html',
})
export class AddSeasonContainerComponent implements OnInit {
  constructor(private sendFormService: SendFormService) {}

  ngOnInit(): void {}
  onAddSeason(season: any) {
    this.sendFormService.addSeason(season).subscribe();
    return true;
  }
}
