import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAppRootComponent } from './employee-app-root.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EmployeeAppRootComponent', () => {
  let component: EmployeeAppRootComponent;
  let fixture: ComponentFixture<EmployeeAppRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeAppRootComponent],
      imports: [MatToolbarModule] 
    });
    fixture = TestBed.createComponent(EmployeeAppRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
