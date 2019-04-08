import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TvSearchComponent } from "./tv-search.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

describe("TvSearchComponent", () => {
  let component: TvSearchComponent;
  let fixture: ComponentFixture<TvSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule, FormsModule],
      declarations: [TvSearchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
