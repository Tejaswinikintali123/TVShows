import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ShowTimeService } from "../showtime.service";
import { IShowTime } from "../ishow-time";
@Component({
  selector: "app-show-details",
  templateUrl: "./show-details.component.html",
  styleUrls: ["./show-details.component.scss"]
})
export class ShowDetailsComponent implements OnInit {
  public showDetails: IShowTime;
  constructor(
    private route: ActivatedRoute,
    private showTimeService: ShowTimeService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.showDetails = this.showTimeService.getShowById(parseInt(id));
    }
  }
}
