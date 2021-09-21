import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  count : number = 0;
  i : number = 0;
  str : string = "";
  
  CountCapital(name :string)
  {
    for(this.i = 0; this.i < name.length; this.i++)
    {
      this.str = name.charAt(this.i);
      if(this.str >= 'A' && this.str <= 'Z')
      this.count++
    }
    return "Captial Characters is : "+ name + " , " +" And its count is : " + this.count;
  }
}


