import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.scss']
})
export class DressesComponent {
clothingtypes=[
{'id':1,'name':'Hoodie'},
{'id':2,'name':'Suit'},
{'id':3,'name':'Full sleeve'},
{'id':4,'name':'Half sleeve'},
]
constructor(private router: Router){}
ngOnInit(){}
onSelect(clothingtypes:any){
this.router.navigate(['\dresses',clothingtypes.id])
}
}

