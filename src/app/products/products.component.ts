import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  images: any;
  object: any;
  array: any = [];
  login_id: any;
  id: any;
  quntity: any = 1;
  constructor(private router: Router, private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: any) => {
        this.id = params.get('id');
        this.login_id = params.get('login_id');
        console.log("this.property", this.id)
      }
    )
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAll().subscribe((res: any) => {
      console.log("resresresres", res);
      this.products = res.product;
      this.images = res.image;
      for (var i = 0; i < this.products.length; i++) {
        for (var j = 0; j < this.images.length; j++) {
          if (this.products[i]._id === this.images[j].productId) {
            console.log("imain");
            this.object = {
              _id: this.products[i]._id,
              imagepath: this.images[j].ImagePath,
              productname: this.products[i].productname,
              price: this.products[i].price,
              discription: this.products[i].discription
            }
            this.array.push(this.object);

          }
        }
      }
    })
  }

  saveSelectedProduct(a) {
    var data = {
      login_id: this.login_id,
      productId: a._id,
      imagepath: a.imagepath,
      productname: a.productname,
      price: a.price,
      discription: a.discription,
      quntity: this.quntity

    }
    console.log("aaaaaaaaa", a);
    this.productsService.saveSelectedProduct(data).subscribe((res: any) => {
      this.router.navigate(['/selected-product/' + this.login_id + '/productId/' + a._id])
    });
  }


  numberOnly(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 49 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
