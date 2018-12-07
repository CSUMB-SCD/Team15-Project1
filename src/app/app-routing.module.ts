import { ThankYouComponent } from './thank-you/thank-you.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import {CheckoutInfoComponent } from './checkout-info/checkout-info.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent
  },
  {
    path: 'products-page',
    component: ProductsPageComponent
  },
  {
    path: 'thank-you',
    component: ThankYouComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'checkout-info',
    component: CheckoutInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
