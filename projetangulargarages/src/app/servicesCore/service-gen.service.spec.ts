import { TestBed } from '@angular/core/testing';

import { ServiceGenService } from './service-gen.service';
import { Client } from '../core/interfaces/client';

describe('ServiceGenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceGenService<Client> = TestBed.get(ServiceGenService);
    expect(service).toBeTruthy();
  });
});
