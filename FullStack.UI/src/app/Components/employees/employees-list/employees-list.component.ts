import { EmployeesService } from './../../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee-model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
        console.log(employees);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
