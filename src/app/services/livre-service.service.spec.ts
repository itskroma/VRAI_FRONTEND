import { TestBed } from '@angular/core/testing';

import { LivreService } from './livre-service.service';

describe('LivreService', () => {
  let service: LivreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
