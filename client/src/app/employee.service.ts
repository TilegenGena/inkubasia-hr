import { Injectable } from '@angular/core';
import { Employee } from '../../../shared/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(): Employee {
    return { id: 1, firstName: 'Tilegen', lastName: 'Asankulov' };
  }
}
