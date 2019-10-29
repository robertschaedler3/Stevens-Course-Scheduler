import { TestBed } from '@angular/core/testing';

import { CourseLoaderService } from './course-loader.service';

describe('CourseLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseLoaderService = TestBed.get(CourseLoaderService);
    expect(service).toBeTruthy();
  });
});
