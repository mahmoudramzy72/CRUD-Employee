import { EmployeesService } from 'src/app/services/employees.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee-model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  [x: string]: any;

  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: '',
    salary: 0,
    department: ''
  };

  constructor(private route: ActivatedRoute, private employeesService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.employeesService.getEmployee(id)
          .subscribe({
            next: (respose) => {
              this.employeeDetails = respose;
              console.log(respose);
            } 
          })
        }
      }
    })
  }

  updateEmployee() {
    this.employeesService.updateEmployee(this.employeeDetails.id, this.employeeDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['employees'])
      }
    })
  }

  deleteEmployee(id: string) {
    this.employeesService.deleteEmployee(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['employees'])
      }
    })
  }
}
