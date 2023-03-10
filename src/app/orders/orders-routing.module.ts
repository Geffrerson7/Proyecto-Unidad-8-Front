import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { OrdersComponent } from './orders.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
children:[
  {path:'', component: OrdersComponent}
]
 }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
