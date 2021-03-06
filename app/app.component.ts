import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `   
<nav class="navbar navbar storeheader">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" >{{pageTitle}}</a>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li><a [routerLink]="['/list']">Store</a></li>
      <li><a [routerLink]="['/checkout']">Checkout</a></li>
    </ul>
  </div>
</nav>
  
<div class="container">
   <router-outlet></router-outlet>
</div>

     `
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
