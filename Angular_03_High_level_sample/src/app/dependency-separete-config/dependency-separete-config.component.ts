import { Component } from '@angular/core';
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-dependency-separete-config',
  templateUrl: './dependency-separete-config.component.html',
  styleUrls: ['./dependency-separete-config.component.scss'],
  providers:[MathsService]
})
export class DependencySepareteConfigComponent {
  constructor(public maths:MathsService){}
  ngOnInit():void{}
  Increase(){
    this.maths.addOne();
  }
}
