import { TestBed, async, inject } from '@angular/core/testing';

import { MecanicienGuard } from './mecanicien.guard';

describe('MecanicienGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MecanicienGuard]
    });
  });

  it('should ...', inject([MecanicienGuard], (guard: MecanicienGuard) => {
    expect(guard).toBeTruthy();
  }));
});
