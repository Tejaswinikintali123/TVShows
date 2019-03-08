import { Component } from "@angular/core";
import { IShowTime } from "../ishow-time";
import { ShowTimeService } from "../showtime.service";

@Component({
  selector: "app-root",
  templateUrl: "./show-list.component.html"
})
export class ShowListComponent {
  tvShow: IShowTime[];
    constructor(private showtimeService: ShowTimeService) {
        this.tvShow = this.showtimeService.getExistingSearchData();
    }
  doSearch(searchValue) {
    const userInput = searchValue;
    if (userInput.length > 1) {
      this.showtimeService
        .getshowTime(userInput)
        .subscribe(data => (this.tvShow = data));
    }
  }
}
