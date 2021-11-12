import { Component, OnInit } from '@angular/core';
import { CheckFormService } from '../../check-form.service';
import { SendFormService } from 'src/app/send-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrls: ['./add-competition.component.scss']
})
export class AddCompetitionComponent implements OnInit {

  competitionName:string
  
  constructor(private checkForm: CheckFormService, private sendFormService: SendFormService, private router: Router) { }

  ngOnInit(): void {
  }
  competitionAddClick(){
    const competition = { 
      competitionName: this.competitionName
    }
    if(!this.checkForm.checkCompetition(competition.competitionName)){
      console.log('enter competition name')
      return false
    }

    this.sendFormService.addCompetition(competition).subscribe((data:any) => {
      console.log(data)
      if(!data.success){
        console.log('!!!не получилось' )
      } else {
        console.log('competition add' + data)
        this.router.navigate(['/'])
      }
    })
  }


}
