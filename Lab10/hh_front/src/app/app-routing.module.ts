import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {VacanciesComponent} from "./vacancies/vacancies.component";
import {CompaniesComponent} from "./companies/companies.component";

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'companies/:id/vacancies', component: VacanciesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
