import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperandsComponent } from './operands.component';

describe('OperandsComponent', () => {
  let component: OperandsComponent;
  let fixture: ComponentFixture<OperandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
