import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingComponent } from './components/rating/rating.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ShowCardComponent } from './components/show-card/show-card.component';

@NgModule({
	declarations: [AppComponent, RatingComponent, SidenavComponent, ShowCardComponent],
	imports: [BrowserModule, BrowserAnimationsModule, MatCardModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
