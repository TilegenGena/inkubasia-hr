import { Injectable } from '@nestjs/common';
import { Employee } from 'shared/employee.interface';


@Injectable()
export class EmployeeService {
        getAllEmployees(): Employee[] {
          console.log(' service');

          return [            
            { id: 1, firstName: 'Tilegen', lastName: 'Asankulov' },
            { id: 2, firstName: 'Bek', lastName: 'Israilov' }
        ]
        }
}
