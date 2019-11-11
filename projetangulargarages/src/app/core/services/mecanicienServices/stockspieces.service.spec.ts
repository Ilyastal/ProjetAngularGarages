import { TestBed } from '@angular/core/testing';

import { StockspiecesService } from './stockspieces.service';

describe('StockspiecesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockspiecesService = TestBed.get(StockspiecesService);
    expect(service).toBeTruthy();
  });
});
