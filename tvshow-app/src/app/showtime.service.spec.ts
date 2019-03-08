import { TestBed } from '@angular/core/testing';

import { ShowTimeService } from './showtime.service';

describe('ShowtimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowTimeService = TestBed.get(ShowTimeService);
    expect(service).toBeTruthy();
  });
});
