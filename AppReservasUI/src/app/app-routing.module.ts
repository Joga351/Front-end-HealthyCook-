import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { FindCustomerComponent } from './find-customer/find-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component'
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  {path: '', redirectTo:'customer', pathMatch:'full'},
  {path: 'listar', component: ListCustomerComponent},
  {path: 'nuevo', component:CreateCustomerComponent},
  {path: 'actualizar/:id', component: UpdateCustomerComponent},
  {path: 'buscar', component: FindCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
