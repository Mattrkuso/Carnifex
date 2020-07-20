import { TestBed } from '@angular/core/testing';

import { ActualizarGuard } from './actualizar.guard';

describe('ActualizarGuard', () => {
  let guard: ActualizarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActualizarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
