import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalizationComponent } from './internalization.component';

describe('InternalizationComponent', () => {
  let component: InternalizationComponent;
  let fixture: ComponentFixture<InternalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
