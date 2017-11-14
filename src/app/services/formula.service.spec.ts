import { TestBed, inject } from '@angular/core/testing';

import { FormulaService } from './formula.service';

describe('FormulaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormulaService]
    });
  });

  it('should be created', inject([FormulaService], (service: FormulaService) => {
    expect(service).toBeTruthy();
  }));
});
