import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class CheckFormService {

  constructor() { 
    
  }

  checkCompetition(competitionName: String){
    if(competitionName == undefined)
      return false
    else
      return true  
  }
  checkMatchName1(team1: String){
    if(team1 == undefined)
      return false
    else
      return true  
  }
  checkMatchName2(team2: String){
    if(team2 == undefined)
      return false
    else
      return true  
  }

  checkScoreName1(score1: Number){
    if(score1 == undefined)
      return false
    else
      return true  
  }
  checkScoreName2(score2: Number){
    if(score2 == undefined)
      return false
    else
      return true  
  }
  checkDate(date: Date){
    if(date == undefined)
      return false
    else
      return true  
  }
  
  checkSeasonName(seasonName:String){
    if(seasonName == undefined)
      return false
    else
      return true 
  }
  
}
