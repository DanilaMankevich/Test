import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class CheckFormService {

  constructor() {

  }

  checkValue(value: string | number){
    return !!value
  }

  checkDate(date: Date) {
    return !!date
  }


}
