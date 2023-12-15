import { Component, OnInit } from '@angular/core';
import { Employee } from 'shared/employee.interface';
import { EmployeeService } from 'src/app/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-app-root',
  templateUrl: './admin-app-root.component.html',
  styleUrls: ['./admin-app-root.component.scss']
})
export class AdminAppRootComponent implements OnInit {
  employees$!: Observable<Employee[]>

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees$ = this.employeeService.getAllEmployees();
  }
}
