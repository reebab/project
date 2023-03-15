import { TestBed } from '@angular/core/testing';

import { PackerService } from './packer.service';

describe('PackerService', () => {
  let service: PackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
