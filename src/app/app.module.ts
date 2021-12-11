import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { LoginComponent } from './more-pages/login/login.component';
import { RegisterComponent } from './more-pages/register/register.component';
import { WishlistComponent } from './more-pages/wishlist/wishlist.component';
import { ContactUsComponent } from './more-pages/contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './more-pages/admin/admin.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    MyAccountComponent,
    LoginComponent,
    RegisterComponent,
    WishlistComponent,
    ContactUsComponent,
    AdminComponent,
    
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
