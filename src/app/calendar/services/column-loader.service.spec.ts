import { TestBed } from '@angular/core/testing';

import { ColumnLoaderService } from './column-loader.service';

describe('ColumnLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColumnLoaderService = TestBed.get(ColumnLoaderService);
    expect(service).toBeTruthy();
  });
});
