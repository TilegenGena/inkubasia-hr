import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAppRootComponent } from './admin-app-root/admin-app-root.component';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AdminAppRootComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ], 
  exports: [
    AdminAppRootComponent
  ]
})
export class AdminAppModule { }
