import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
import { RegistrationContainerComponent } from './pages/registration-container/registration-container.component';
import { RegistrationFormComponent } from './pages/registration-container/components/registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { LoginFormComponent } from './pages/login-container/components/login-form/login-form.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ReviewFormComponent } from './pages/show-details-container/components/review-form/review-form.component';

@NgModule({
	declarations: [
		AllShowsContainerComponent,
		AppComponent,
		ErrorComponent,
		FormLayoutComponent,
		LoadingComponent,
		LoginContainerComponent,
		LoginFormComponent,
		MainLayoutComponent,
		RatingComponent,
		RegistrationContainerComponent,
		RegistrationFormComponent,
		ReviewComponent,
		ReviewListComponent,
		ShowCardComponent,
		ShowDetailsComponent,
		ShowDetailsContainerComponent,
		ShowListComponent,
		SidenavComponent,
		TopRatedContainerComponent,
		ReviewFormComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		HttpClientModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatSidenavModule,
		MatSnackBarModule,
		ReactiveFormsModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
