import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackdisplayerComponent } from './stackdisplayer.component';

describe('StackdisplayerComponent', () => {
  let component: StackdisplayerComponent;
  let fixture: ComponentFixture<StackdisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackdisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackdisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
