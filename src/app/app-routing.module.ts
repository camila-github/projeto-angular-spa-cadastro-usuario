import { DeleteUserComponent } from './register-user/delete-user/delete-user.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { CrudUserComponent } from "./register-user-crud/crud-user.component";
import { CreateUserComponent } from './register-user/create-user/create-user.component';
import { UpdateUserComponent } from './register-user/update-user/update-user.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "cadastro",
    component: CrudUserComponent
  },
  {
    path: "cadastro/create",
    component: CreateUserComponent
  },
  {
    path: "cadastro/update/:id",
    component: UpdateUserComponent
  },
  {
    path: "cadastro/delete/:id",
    component: DeleteUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
