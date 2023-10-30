import { TestBed } from '@angular/core/testing';

import { DataPrpductService } from './data-prpduct.service';

describe('DataPrpductService', () => {
  let service: DataPrpductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPrpductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
