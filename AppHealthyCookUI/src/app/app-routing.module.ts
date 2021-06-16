import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBeginnerComponent } from './create-beginner/create-beginner.component';
import { FindBeginnerComponent } from './find-beginner/find-beginner.component';
import { ListBeginnerComponent } from './list-beginner/list-beginner.component'
import { UpdateBeginnerComponent } from './update-beginner/update-beginner.component';

const routes: Routes = [
  {path: '', redirectTo:'beginner', pathMatch:'full'},
  {path: 'listar', component: ListBeginnerComponent},
  {path: 'nuevo', component:CreateBeginnerComponent},
  {path: 'actualizar/:id', component: UpdateBeginnerComponent},
  {path: 'buscar', component: FindBeginnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }