import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateChefComponent } from './create-chef/create-chef.component';
import { FindChefComponent } from './find-chef/find-chef.component';
import { ListChefComponent } from './list-chef/list-chef.component'
import { UpdateChefComponent } from './update-chef/update-chef.component';

const routes: Routes = [
  {path: '', redirectTo:'chef', pathMatch:'full'},
  {path: 'listar', component: ListChefComponent},
  {path: 'nuevo', component:CreateChefComponent},
  {path: 'actualizar/:id', component: UpdateChefComponent},
  {path: 'buscar', component: FindChefComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
