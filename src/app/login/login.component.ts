import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;
  details: any;
  login: any = {
    email: '',
    pass: '',
    role: 'user'
  }

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit() {
  }

  onLogin(){
    if(!this.login.email){
      this.error = 'email Id is important';
      return;
    }
    if(!this.login.pass){
      this.error = 'password is important';
      return;
    }
    this.registerService.onLogin(this.login).subscribe((res: any) => {
console.log("res",res);
      this.details = res.details;
      if(res.status == "error"){
        this.error = res.message;
      }else{
        this.router.navigate(['/details/' + this.details._id])
      }
    })
  }

  onRegister(){
    this.router.navigate(['/register'])
  }
}
