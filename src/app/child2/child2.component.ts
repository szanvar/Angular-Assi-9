import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private captialCountObj : StringService) { }

  public ans : any = [];
  ngOnInit(): void 
  {
    this.ans = this.captialCountObj.CountCapital("MARVellous InfoSystem");
  }

}
