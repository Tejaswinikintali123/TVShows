import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShowListComponent } from "./list/show-list.component";
import { ShowDetailsComponent } from "./details/show-details.component";

const routes: Routes = [
  { path: "", component: ShowListComponent, pathMatch: "full" },
  { path: "details/:id", component: ShowDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
