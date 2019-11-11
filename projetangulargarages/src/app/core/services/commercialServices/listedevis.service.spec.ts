import { TestBed } from '@angular/core/testing';

import { ListedevisService } from './listedevis.service';

describe('ListedevisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListedevisService = TestBed.get(ListedevisService);
    expect(service).toBeTruthy();
  });
});
