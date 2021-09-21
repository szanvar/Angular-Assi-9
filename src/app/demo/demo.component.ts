import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private obj : ArithmeticService) { }

  public Addition : number = 0;
  public Subtraction : number = 0;

  ngOnInit(): void 
  {
    this.Addition = this.obj.Add(11,7);
    this.Subtraction = this.obj.Sub(11,7);
  }

}
