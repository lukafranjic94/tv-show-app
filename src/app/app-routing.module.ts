import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from './app.guard';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { RegistrationContainerComponent } from './pages/registration-container/registration-container.component';
import { ShowDetailsContainerComponent } from './pages/show-details-container/show-details-container.component';
import { TopRatedContainerComponent } from './pages/top-rated-container/top-rated-container.component';
import { UserProfileContainerComponent } from './pages/user-profile-container/user-profile-container.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{ path: '', component: AllShowsContainerComponent },
			{ path: 'top-rated', component: TopRatedContainerComponent },
			{ path: 'show/:id', component: ShowDetailsContainerComponent },
			{ path: 'profile', component: UserProfileContainerComponent },
		],
		canActivate: [AppGuard],
	},
	{
		path: '',
		component: FormLayoutComponent,
		children: [
			{ path: 'register', component: RegistrationContainerComponent },
			{ path: 'login', component: LoginContainerComponent },
		],
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
