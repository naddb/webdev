import {Component, OnInit} from '@angular/core';
import {Company} from "../models";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit{

  newCompany = {} as Company
  companies: Company[] = []

  ngOnInit() {
    this.getCompanies()
  }

  constructor(private companyService: CompanyService) {
  }

  getCompanies(){
    this.companyService.getCompanies().subscribe( (companies) => {
      this.companies = companies
    })
  }


  addCompany(){
    this.companyService.createCompany(this.newCompany).subscribe( (company) => {
      this.companies.push(company)
      this.newCompany = {} as Company
    })
  }
}
