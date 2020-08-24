import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCartListComponent } from './components/my-cart-list/my-cart-list.component';
import { HomeComponent } from './components/home/home.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';


const routes: Routes = [
  { path:'myCart', component: MyCartListComponent },
  { path:'',component:HomeComponent},
  { path:'topRated',component:TopRatedComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[MyCartListComponent];