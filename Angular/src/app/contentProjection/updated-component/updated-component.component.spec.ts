import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedComponentComponent } from './updated-component.component';

describe('UpdatedComponentComponent', () => {
  let component: UpdatedComponentComponent;
  let fixture: ComponentFixture<UpdatedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
