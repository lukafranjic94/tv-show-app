import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LogoComponent } from './components/logo/logo.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { RatingComponent } from './components/rating/rating.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AuthErrorInterceptor } from './interceptors/auth-error.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { LoginFormComponent } from './pages/login-container/components/login-form/login-form.component';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { RegistrationFormComponent } from './pages/registration-container/components/registration-form/registration-form.component';
import { RegistrationContainerComponent } from './pages/registration-container/registration-container.component';
import { ReviewFormComponent } from './pages/show-details-container/components/review-form/review-form.component';
import { ReviewListComponent } from './pages/show-details-container/components/review-list/review-list.component';
import { ReviewComponent } from './pages/show-details-container/components/review/review.component';
import { ShowDetailsComponent } from './pages/show-details-container/components/show-details/show-details.component';
import { ShowDetailsContainerComponent } from './pages/show-details-container/show-details-container.component';
import { TopRatedContainerComponent } from './pages/top-rated-container/top-rated-container.component';
import { UserProfileContainerComponent } from './pages/user-profile-container/user-profile-container.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
	declarations: [
		AllShowsContainerComponent,
		AppComponent,
		ErrorComponent,
		FormLayoutComponent,
		LoadingComponent,
		LoginContainerComponent,
		LoginFormComponent,
		LogoComponent,
		MainLayoutComponent,
		RatingComponent,
		RegistrationContainerComponent,
		RegistrationFormComponent,
		ReviewComponent,
		ReviewFormComponent,
		ReviewListComponent,
		ShowCardComponent,
		ShowDetailsComponent,
		ShowDetailsContainerComponent,
		ShowListComponent,
		SidenavComponent,
		TopRatedContainerComponent,
		UserProfileContainerComponent,
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
		MatMenuModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatSidenavModule,
		MatSnackBarModule,
		NgbModule,
		ReactiveFormsModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthErrorInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
