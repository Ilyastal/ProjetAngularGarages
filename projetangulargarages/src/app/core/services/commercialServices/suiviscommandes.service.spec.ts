import { TestBed } from '@angular/core/testing';

import { SuiviscommandesService } from './suiviscommandes.service';

describe('SuiviscommandesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuiviscommandesService = TestBed.get(SuiviscommandesService);
    expect(service).toBeTruthy();
  });
});
