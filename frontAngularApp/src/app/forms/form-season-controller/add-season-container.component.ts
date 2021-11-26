import { Component, OnInit } from '@angular/core';
import { SendFormService } from 'src/app/services/send-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-season-container',
  templateUrl: './add-season-container.component.html',
})
export class AddSeasonContainerComponent implements OnInit {
  constructor(
    private sendFormService: SendFormService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onAddSeason(season: any) {
    this.sendFormService.addCompetition(season).subscribe();
    return this.router.navigate(['/']);
  }
}
