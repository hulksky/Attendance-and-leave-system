import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { UpdateProjComponent } from './update-proj/update-proj.component';

const routes: Routes = [
  {path:'projects' , component : ProjectListComponent},
  {path:'projects/add' , component : AddProjectComponent},
  {path:'projects/update/:id' , component : UpdateProjComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
