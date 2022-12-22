import { Component } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.scss']
})
export class AngularFormsComponent {
public shirts=['S','M','L']
userModel=new User('kural','','','',9080724529,true);
}
