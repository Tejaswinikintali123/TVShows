import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-tv-search',
  templateUrl: './tv-search.component.html',
  styleUrls: ['./tv-search.component.scss'],
})
export class TvSearchComponent implements OnInit {

  search = new FormControl('', [Validators.minLength(2)]);
  @Output() searchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

    this.search.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((searchValue: string) => {
        if (!this.search.invalid) {
          this.searchEvent.emit(searchValue);
        }
      });
  }
}