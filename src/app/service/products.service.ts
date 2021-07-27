import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private backendService: BackendService) { }

  getAll(){
    return this.backendService.get('product' + '/getAllProduct');

  }

  saveSelectedProduct(a){
    return this.backendService.post('product' + '/saveSelectedProduct', a);

  }

  getSelectedProductById(login_id,id){
    var productId = {
      login_id: login_id,
      id: id
    }
    return this.backendService.post('product' + '/getSelectedProduct',productId);
  }

  deleteSelectedProductById(login_id,id){
    var productId = {
      login_id: login_id,
      id: id
    }
    return this.backendService.post('product' + '/deleteSelectedProduct',productId);
  }
}
