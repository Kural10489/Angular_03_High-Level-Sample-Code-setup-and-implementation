import { Component } from '@angular/core';
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.scss']
})
export class DependencyComponent {
constructor(public maths:MathsService){}
ngOnInit():void{}
Increase(){
  this.maths.addOne();
}
}
