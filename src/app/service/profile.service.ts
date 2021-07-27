import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private backendService: BackendService) { }

  onSave(details){
    console.log("details",details);
    return this.backendService.post('profile', details);
  }

  getProfile(id){
    return this.backendService.get('profile'+ '/getProfile/' + id);
  }
}
