import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from 'src/employee/employee.service';

@Controller('admin')
export class AdminController {
    
    constructor(private readonly employeeService: EmployeeService) {}
    @Get('get_all_employees')
    getAllEmployees() {
        return this.employeeService.getAllEmployees();
        console.log('admin controller');
    }
}
