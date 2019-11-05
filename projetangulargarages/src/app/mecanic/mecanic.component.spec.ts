import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicComponent } from './mecanic.component';

describe('MecanicComponent', () => {
  let component: MecanicComponent;
  let fixture: ComponentFixture<MecanicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecanicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
