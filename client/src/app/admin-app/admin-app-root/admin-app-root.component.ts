import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../../../shared/employee.interface';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-admin-app-root',
  templateUrl: './admin-app-root.component.html',
  styleUrls: ['./admin-app-root.component.scss']
})
export class AdminAppRootComponent implements OnInit {
  employees: Employee[] = []

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.employees.push(this.employeeService.getEmployees());
  }
}
