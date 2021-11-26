import {Component, OnInit,Output, EventEmitter} from '@angular/core';
import {CheckFormService} from '../../services/check-form.service';


@Component({
  selector: 'app-add-season',
  templateUrl: './add-season.component.html',
  styleUrls: ['./add-season.component.scss']
})

export class AddSeasonComponent implements OnInit {
  @Output() private addSeason = new EventEmitter<any>();
  seasonName: string

  constructor(private checkForm: CheckFormService) {
  }

  ngOnInit(): void {
  }

  SeasonAdd() {
    const season = {
      seasonName: this.seasonName
    }
    if (!this.checkForm.checkValue(season.seasonName)) {
      console.log('enter season name')
      return false
    }
    this.addSeason.emit(season)
  }
}
