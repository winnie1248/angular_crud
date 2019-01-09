import { TestBed } from '@angular/core/testing';

import { HttpTransferService } from './http-transfer.service';

describe('HttpTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpTransferService = TestBed.get(HttpTransferService);
    expect(service).toBeTruthy();
  });
});
