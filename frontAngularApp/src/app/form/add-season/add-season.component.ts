import { Component, OnInit } from '@angular/core';
import { CheckFormService } from '../../check-form.service';
import { SendFormService } from 'src/app/send-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-season',
  templateUrl: './add-season.component.html',
  styleUrls: ['./add-season.component.scss']
})
export class AddSeasonComponent implements OnInit {

  seasonName: String

  constructor(private checkForm: CheckFormService, private sendFormService: SendFormService, private router: Router) { }

  ngOnInit(): void {
  }
  SeasonAddClick() {
    const season = {
      seasonName: this.seasonName
    }
    if (!this.checkForm.checkSeasonName(season.seasonName)) {
      console.log('enter season name')
      return false
    }

    this.sendFormService.addSeason(season).subscribe((data:any) => {
      console.log(data)
      if(!data.success){
        console.log('!!!не получилось' )
      } else {
        console.log('season add')
        this.router.navigate(['/'])
      }
    })
    
  }
}
