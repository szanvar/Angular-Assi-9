import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  public ans : number = 0;
  
  Add(a : number, b: number)
  {
     return this.ans = a + b;
  }

  Sub(a : number, b: number)
  {
     return this.ans = a - b;
  }
}
