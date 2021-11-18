import {Component, OnInit} from '@angular/core';
import {CheckFormService} from '../../check-form.service';
import {SendFormService} from 'src/app/send-form.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-season',
  templateUrl: './add-season.component.html',
  styleUrls: ['./add-season.component.scss']
})
export class AddSeasonComponent implements OnInit {

  seasonName: string

  constructor(private checkForm: CheckFormService, private sendFormService: SendFormService, private router: Router) {
  }

  ngOnInit(): void {
  }

  SeasonAdd() {
    const season = {
      seasonName: this.seasonName
    }
    if (!this.checkForm.checkValue(season.seasonName)) {
      console.log('enter season name')
      return
    }

    this.sendFormService.addSeason(season).subscribe();
    return this.router.navigate(['/'])

  }
}
