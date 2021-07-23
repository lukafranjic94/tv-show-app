import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthData } from 'src/app/interfaces/auth-data.interface';
import { LoginFormData } from 'src/app/pages/login-container/components/login-form/login-form.component';
import { RegistrationFormData } from 'src/app/pages/registration-container/components/registration-form/registration-form.component';
import { StorageService } from '../storage/storage.service';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private readonly authDataKey = 'authData';
	constructor(private http: HttpClient, private storageService: StorageService) {}
	public onRegister(registrationFormData: RegistrationFormData): Observable<RegistrationFormData> {
		return this.http.post<RegistrationFormData>('https://tv-shows.infinum.academy/users', {
			email: registrationFormData.email,
			password: registrationFormData.password,
			password_confirmation: registrationFormData.passwordConfirmation,
		});
	}

	public onLogin(loginFormData: LoginFormData): Observable<any> {
		return this.http
			.post<HttpResponse<any>>('https://tv-shows.infinum.academy/users/sign_in', loginFormData, { observe: 'response' })
			.pipe(
				tap((response: HttpResponse<any>) => {
					const accessToken: string | null = response.headers.get('access-token');
					const uid: string | null = response.headers.get('uid');
					const client: string | null = response.headers.get('client');

					if (accessToken && uid && client) {
						this.saveAuthData({ uid, accessToken, client });
					}
				})
			);
	}

	public saveAuthData(authData: AuthData): void {
		this.storageService.add(this.authDataKey, authData);
	}

	public getAuthData(): AuthData | null {
		return this.storageService.get(this.authDataKey);
	}
}
