import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../company.service";
import {Vacancy} from "../models";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit{

  vacancies: Vacancy[] = []
  constructor(private route: ActivatedRoute, private companyService: CompanyService) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("hello")
    this.getVacancies(id)
  }

  getVacancies(id: number){
    console.log(id)
    this.companyService.getVacancies(id).subscribe(( (vacancies) => {
      this.vacancies = vacancies;
      console.log(vacancies)
    }))
  }
}
