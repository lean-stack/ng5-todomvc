import { TestBed, inject } from '@angular/core/testing';

import { HttpStoreService } from './http-store.service';

describe('HttpStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpStoreService]
    });
  });

  it('should be created', inject([HttpStoreService], (service: HttpStoreService) => {
    expect(service).toBeTruthy();
  }));
});
