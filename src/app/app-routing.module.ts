import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';
import { SelectedProductComponent } from './selected-product/selected-product.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: 'products/:login_id', component:ProductsComponent},
  { path: 'selected-product/:login_id/productId/:id', component: SelectedProductComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }