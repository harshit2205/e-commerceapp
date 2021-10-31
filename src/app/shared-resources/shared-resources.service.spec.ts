import { TestBed } from '@angular/core/testing';

import { SharedResourcesService } from './shared-resources.service';

describe('SharedResourcesService', () => {
  let service: SharedResourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedResourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
