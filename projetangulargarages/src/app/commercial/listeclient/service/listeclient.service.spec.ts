import { TestBed } from '@angular/core/testing';

import { ListeclientService } from './listeclient.service';

describe('ListeclientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListeclientService = TestBed.get(ListeclientService);
    expect(service).toBeTruthy();
  });
});
