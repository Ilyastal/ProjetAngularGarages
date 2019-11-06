import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockspiecesComponent } from './stockspieces.component';

describe('StockspiecesComponent', () => {
  let component: StockspiecesComponent;
  let fixture: ComponentFixture<StockspiecesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockspiecesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockspiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
