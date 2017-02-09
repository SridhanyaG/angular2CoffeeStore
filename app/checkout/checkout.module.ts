import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CheckOutForm} from './checkout.form';


@NgModule({
  imports: [ CommonModule, FormsModule],
  exports : [
     CheckOutForm
  ],
  declarations: [ CheckOutForm ],
})
export class CheckoutModule { }
