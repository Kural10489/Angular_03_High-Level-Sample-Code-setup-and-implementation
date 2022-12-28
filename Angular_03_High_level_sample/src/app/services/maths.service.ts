import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathsService {
  counter:number=0;
  constructor() { }
  addOne(){
    this.counter++;
  }
}
