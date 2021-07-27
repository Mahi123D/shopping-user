import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  error: any;
  id: any;
  profile: any = {
    fullname: '',
    phone: '',
    address: '',
    pincode: ''
  }

  constructor(private router: Router, private profileService: ProfileService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: any) => {
        this.id = params.get('id');
        console.log("this.property",this.id)
      }
    )

    if(this.id){
      this.getProfile();
    }
  }

  onSave(){
    if(!this.profile.fullname){
      this.error = 'Please enter the fullname';
      return false;
    }
    if(!this.profile.phone){
      this.error = 'Please enter the phone';
      return false;
    }
    if(!this.profile.address){
      this.error = 'please enter the address';
      return false;
    }
    if(!this.profile.pincode){
      this.error = 'Please enter the pincode';
      return false;
    }
    var data = {
      id: this.id,
      profile: this.profile
    }
    this.profileService.onSave(data).subscribe((res: any) => {

      if(res.status == "error"){
        this.error = res.message;
      }else{
      this.router.navigate(['/products/'+ this.id])
      }
    });
    }

    getProfile(){
      this.profileService.getProfile(this.id).subscribe((res: any) => {
        this.profile = res.profile;
      })
    }
}
