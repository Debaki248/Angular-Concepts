import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeINfoComponent } from './employee-info.component';

describe('EmployeeINfoComponent', () => {
  let component: EmployeeINfoComponent;
  let fixture: ComponentFixture<EmployeeINfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeINfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeINfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
