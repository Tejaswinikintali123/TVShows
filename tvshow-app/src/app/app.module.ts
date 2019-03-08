import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ShowTimeComponent } from "./show-time/show-time.component";
import { ShowTimeService } from "./showtime.service";
import { HttpClientModule } from "@angular/common/http";
import { TvSearchComponent } from "./tv-search/tv-search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
} from "@angular/material";
import { ShowDetailsComponent } from "./details/show-details.component";
import { ShowListComponent } from "./list/show-list.component";

@NgModule({
  declarations: [
    AppComponent,
    ShowTimeComponent,
    TvSearchComponent,
    ShowDetailsComponent,
    ShowListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
  ],
  exports: [
    ReactiveFormsModule,
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatGridListModule,
  ],

  providers: [ShowTimeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
