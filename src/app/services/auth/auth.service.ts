import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginFormData } from 'src/app/pages/login-container/components/login-form/login-form.component';
import { RegistrationFormData } from 'src/app/pages/registration-container/components/registration-form/registration-form.component';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private http: HttpClient) {}
	public onRegister(registrationFormData: RegistrationFormData): Observable<RegistrationFormData> {
		return this.http.post<RegistrationFormData>('https://tv-shows.infinum.academy/users', {
			email: registrationFormData.email,
			password: registrationFormData.password,
			password_confirmation: registrationFormData.passwordConfirmation,
		});
	}

	public onLogin(loginFormData: LoginFormData): Observable<LoginFormData> {
		return this.http.post<LoginFormData>('https://tv-shows.infinum.academy/users/sign_in', loginFormData);
	}
}
