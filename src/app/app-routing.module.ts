import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemTabComponent } from './item-tab/item-tab.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {path: 'user', component : UserInfoComponent},
  {path: "user/my_acc/cart", component: CartItemsComponent},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'item-info', component: ItemTabComponent},
  {path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = 
  [DashboardComponent
  , ItemTabComponent
  , PageNotFoundComponent
  , UserInfoComponent
  , CartItemsComponent];
