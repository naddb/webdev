import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company, Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://localhost:8000'
  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.client.get<Company[]>(
      `${this.BASE_URL}/api/companies/`
    )
  }

  createCompany(company: Company): Observable<Company>{
    return this.client.post<Company>(
      `${this.BASE_URL}/api/companies/`,
      company
    )
  }

  deleteCompany(id: number): Observable<any>{
    return this.client.delete(
      `${this.BASE_URL}/api/companies/${id}/`
    )
  }

  getVacancies(id: number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/companies/${id}/vacancies/`
    )
  }
}
