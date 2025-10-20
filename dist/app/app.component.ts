import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-root',
  template: '<main><header class="brand-name"><p style="float:right; padding:50px 25px 0 0;font-weight:bold"><a href="#" style="text-decoration:none;color:#000;margin-right:25px">HOME</a><a href="#" style="text-decoration:none;color:#000;margin-right:25px">CONTACT</a><a href="#" style="text-decoration:none;color:#000;margin-right:25px">SHOP</a></p><img class="brand-logo" src="/assets/yg-logo.png" alt="logo"aria-hidden="true" width="200"></header><section class="content"><router-outlet></router-outlet>></section></main>',
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';
}
