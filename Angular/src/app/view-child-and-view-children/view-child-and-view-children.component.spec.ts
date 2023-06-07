import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildAndViewChildrenComponent } from './view-child-and-view-children.component';

describe('ViewChildAndViewChildrenComponent', () => {
  let component: ViewChildAndViewChildrenComponent;
  let fixture: ComponentFixture<ViewChildAndViewChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildAndViewChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildAndViewChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
