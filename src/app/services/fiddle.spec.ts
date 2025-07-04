import { TestBed } from '@angular/core/testing';

import { Fiddle } from './fiddle';

describe('Fiddle', () => {
  let service: Fiddle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fiddle);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
