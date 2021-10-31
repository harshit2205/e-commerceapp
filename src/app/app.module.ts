import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemTabComponent } from './item-tab/item-tab.component';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemTabComponent,
    DashboardComponent,
    PageNotFoundComponent,
    RoutingComponents,
    UserInfoComponent,
    CartItemsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
