import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(): Employee {
    return { id: 1, firstName: 'Tilegen', lastName: 'Asankulov' };
  }
}
