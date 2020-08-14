import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCartListComponent } from './components/my-cart-list/my-cart-list.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path:'myCart', component: MyCartListComponent },
  { path:'',component:HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[MyCartListComponent];