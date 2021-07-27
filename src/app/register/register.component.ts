import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: any;

  register: any = {
    email: '',
    pass: '',
    cpass:'',
    phone:'',
    role: 'user'
  }

  constructor(private router: Router, private registerService: RegisterService ) { }

  ngOnInit() {
  }

  onRegister(){

    if(!this.register.email){
      this.error = 'email Id is important';
      return false;
    }
    if(!this.register.pass){
      this.error = 'password is important';
      return false;
    }
    if(this.register.pass != this.register.cpass){
      this.error = 'Confirm password and password should be same';
      return false;
    }

    this.registerService.onRegister(this.register).subscribe((res: any) => {
      console.log("res",res);
      if(res.status == "error"){
        this.error = res.message;
      }else{
      this.router.navigate(['/login'])
      }
    })
  }

}
