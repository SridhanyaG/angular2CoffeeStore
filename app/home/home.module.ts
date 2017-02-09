import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListPageComponent} from './list.component';
import { SharedModule } from '../shared/shared.module';
import {PriceFilterPipe} from './priceFilterPipe';
import {StoreService} from './app.storeservice';
@NgModule({
  imports: [ CommonModule, SharedModule],
  exports : [
    ListPageComponent,
    PriceFilterPipe
  ],
  providers: [StoreService],
  declarations: [ ListPageComponent,
  PriceFilterPipe ],
})
export class HomeModule { }
