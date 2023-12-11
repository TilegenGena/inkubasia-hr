import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'shared/employee.interface';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'admin/get_all_employees'; 

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
