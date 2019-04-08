import { TestBed, inject } from "@angular/core/testing";

import { ShowTimeService } from "./showtime.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ShowtimeService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShowTimeService]
    }));

 it('should be created', inject([ShowTimeService],
  (service: ShowTimeService)=>{
    expect(service).toBeTruthy()
}) )
});
             