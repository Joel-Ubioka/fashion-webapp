import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { WishlistComponent } from './more-pages/wishlist/wishlist.component';
import { ContactUsComponent } from './more-pages/contact-us/contact-us.component';
import { RegisterComponent } from './more-pages/register/register.component';
import { LoginComponent } from './more-pages/login/login.component';
import { AdminComponent } from './more-pages/admin/admin.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'products', component:ProductsComponent},
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'contact-us', component: ContactUsComponent  },
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard]  },
  { path: 'login', component:LoginComponent  },
  { path: 'admin', component:AdminComponent },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
