import { Component } from '@angular/core';
import {ServicesService} from '../services.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private user:ServicesService){}
  
  
  login(data:string)
  {
    //console.warn(data)
    this.user.userLogin(data);
  }
}
