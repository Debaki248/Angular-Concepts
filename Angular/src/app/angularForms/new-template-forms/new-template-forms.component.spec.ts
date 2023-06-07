import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTemplateFormsComponent } from './new-template-forms.component';

describe('NewTemplateFormsComponent', () => {
  let component: NewTemplateFormsComponent;
  let fixture: ComponentFixture<NewTemplateFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTemplateFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTemplateFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
