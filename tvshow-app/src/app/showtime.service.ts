import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { IShowTime } from "./ishow-time";
import { map } from "rxjs/operators";
// interface IShowTimeData {
//   name: string;
//   genres: string[0];
//   runtime: number;

//   schedule: {
//     days: string[],
//     time: number,
//   };
//   rating: {};
//   image: {
//     medium: string,
//   };
//   summary: string;
// }

@Injectable({
  providedIn: "root"
})
export class ShowTimeService {
  private showsDictionary = {};
  private shows = [];
  constructor(private httpClient: HttpClient) {}
  getshowTime(name: string) {
    return this.httpClient
      .get<any[]>(`http://api.tvmaze.com/search/shows?q=${name}`)
      .pipe(map(data => this.transformtoIShowTime(data)));
  }

  getExistingSearchData(): IShowTime[] {
    return this.shows;
  }
  getShowById(id: number): IShowTime {
    return this.showsDictionary[id];
  }
  private transformtoIShowTime(data: any[]): IShowTime[] {
    this.showsDictionary = {};
    this.shows = [];
    data.forEach((s: any) => {
      this.shows.push({
        id: s.show.id,
        name: s.show.name,
        genres: s.show.genres,
        runtime: s.show.runtime,
        day: s.show.schedule.days,
        time: s.show.schedule.time,
        rating: s.show.rating.average,
        image: s.show.image ? s.show.image.medium : "--",
        description: s.show.summary
      });
      this.showsDictionary[s.show.id] = s.show;
    });
    return this.shows;
  }
}
