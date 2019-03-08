import { Component } from '@angular/core';
import { IShowTime } from './ishow-time';
import { ShowTimeService } from './showtime.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tvshow-app';
}
