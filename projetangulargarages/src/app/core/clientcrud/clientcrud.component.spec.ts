import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcrudComponent } from './clientcrud.component';

describe('ClientcrudComponent', () => {
  let component: ClientcrudComponent;
  let fixture: ComponentFixture<ClientcrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientcrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
