import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppRootComponent } from './admin-app-root.component';

describe('AdminAppRootComponent', () => {
  let component: AdminAppRootComponent;
  let fixture: ComponentFixture<AdminAppRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAppRootComponent]
    });
    fixture = TestBed.createComponent(AdminAppRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
