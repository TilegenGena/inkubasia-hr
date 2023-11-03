import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { EmployeeAppRootComponent } from './employee-app-root/employee-app-root.component';

@NgModule({
  declarations: [
    EmployeeAppRootComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  exports: [
    EmployeeAppRootComponent,
  ]
})
export class EmployeeAppModule { }
