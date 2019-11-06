import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviscommandesComponent } from './suiviscommandes.component';

describe('SuiviscommandesComponent', () => {
  let component: SuiviscommandesComponent;
  let fixture: ComponentFixture<SuiviscommandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviscommandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviscommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
