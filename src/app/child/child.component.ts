import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private primeObj : NumberService, private countCaptialObj : StringService) 
  { }
  public primeAns : string = "";
  public captialCountAns : string = "";

  ngOnInit(): void 
  {
    this.primeAns = this.primeObj.ChkPrime(11);

    this.captialCountAns = this.countCaptialObj.CountCapital("Marvellous InfoSystem Pune");
  }

}
