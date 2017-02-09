import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ListPageComponent } from './home/list.component';
import { CheckOutForm }  from './checkout/checkout.form';
import { AppComponent }  from './app.component';
import {HomeModule} from './home/home.module';
import {CheckoutModule} from './checkout/checkout.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
     { path: '', redirectTo: '/list', pathMatch: 'full'},
  { path: 'list', component: ListPageComponent },
  { path: 'checkout', component: CheckOutForm}
    ]),
    HomeModule,
    CheckoutModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
