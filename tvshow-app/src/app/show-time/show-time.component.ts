import { Component, OnInit, Input } from '@angular/core';
import { IShowTime } from '../ishow-time';
import { ShowTimeService } from '../showtime.service';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss']
})
export class ShowTimeComponent implements OnInit {
  @Input() showDetails: IShowTime[];

  constructor(private showtimeService: ShowTimeService) {

  }

  ngOnInit() {}
}
