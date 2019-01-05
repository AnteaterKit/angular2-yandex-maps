import { TestBed } from '@angular/core/testing';

import { YamapngService } from './yamapng.service';

describe('YamapngService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YamapngService = TestBed.get(YamapngService);
    expect(service).toBeTruthy();
  });
});
