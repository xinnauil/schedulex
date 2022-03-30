import { TestBed } from '@angular/core/testing';

import { SchedulexService } from './schedulex.service';

describe('SchedulexService', () => {
  let service: SchedulexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchedulexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
