import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  i : number = 0;
  f : number = 0;
  ChkPrime(no : number)
  {
     for(this.i = 2; this.i < no/2; this.i++)
     {
        if(no % this.i == 0)
        {
          this.f = 1;
        }
     }
     if(this.f == 0)
     return "It is Prime Number  : " + no;
     else
     return "It is not Prime Number : " + no;
  }
}
