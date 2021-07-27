import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {

  id: any;
  login_id: any;
  product:any;


  constructor(private productsService: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: any) => {
        this.id = params.get('id');
        this.login_id = params.get('login_id');
        console.log("this.property",this.id)
      }
    )
    this.getSelectedProductById()
  }

  getSelectedProductById(){
    this.productsService.getSelectedProductById(this.login_id,this.id).subscribe((res: any) => {
console.log("res.......",res);
    this.product = res.product; 
    });
  }

  deleteSelectedProductById(){
    this.productsService.deleteSelectedProductById(this.login_id,this.id).subscribe((res: any) => {
      console.log("res..dede.....",res);
      this.router.navigate(['/products/' + this.login_id])
    });
  }
}
