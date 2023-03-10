import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
    ToastrModule.forRoot(),
  ]
})
export class CategoriesModule { }
