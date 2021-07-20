import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingComponent } from './components/rating/rating.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { TopRatedContainerComponent } from './pages/top-rated-container/top-rated-container.component';
import { ShowDetailsContainerComponent } from './pages/show-details-container/show-details-container.component';
import { ShowDetailsComponent } from './pages/show-details-container/components/show-details/show-details.component';
import { ReviewListComponent } from './pages/show-details-container/components/review-list/review-list.component';
import { ReviewComponent } from './pages/show-details-container/components/review/review.component';
import { ErrorComponent } from './components/error/error.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';

@NgModule({
	declarations: [
		AppComponent,
		RatingComponent,
		SidenavComponent,
		ShowCardComponent,
		ShowListComponent,
		AllShowsContainerComponent,
		MainLayoutComponent,
		TopRatedContainerComponent,
		ShowDetailsContainerComponent,
		ShowDetailsComponent,
		ReviewListComponent,
		ReviewComponent,
  ErrorComponent,
  LoadingComponent,
  FormLayoutComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatSidenavModule,
		MatIconModule,
		AppRoutingModule,
		MatProgressSpinnerModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
