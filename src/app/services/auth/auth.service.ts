import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IAuthData } from 'src/app/interfaces/auth-data.interface';
import { ILoginFormData } from 'src/app/pages/login-container/components/login-form/login-form.component';
import { IRegistrationFormData } from 'src/app/pages/registration-container/components/registration-form/registration-form.component';
import { ApiPaths, environment } from 'src/environments/environment';
import { StorageService } from '../storage/storage.service';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private readonly authDataKey: string = 'authData';
	private _isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(Boolean(this.getAuthData()));
	public isLoggedIn$: Observable<boolean> = this._isLoggedIn$.asObservable();
	private baseUrl: string = environment.baseUrl;

	constructor(private http: HttpClient, private storageService: StorageService) {}

	public register(registrationFormData: IRegistrationFormData): Observable<any> {
		return this.http
			.post<HttpResponse<any>>(
				`${this.baseUrl}${ApiPaths.Auth}`,
				{
					email: registrationFormData.email,
					password: registrationFormData.password,
					password_confirmation: registrationFormData.passwordConfirmation,
				},
				{ observe: 'response' }
			)
			.pipe(tap(this.handleResponse.bind(this)));
	}

	public logIn(loginFormData: ILoginFormData): Observable<any> {
		return this.http
			.post<HttpResponse<any>>(`${this.baseUrl}${ApiPaths.Auth}/sign_in`, loginFormData, { observe: 'response' })
			.pipe(tap(this.handleResponse.bind(this)));
	}

	private handleResponse(response: HttpResponse<any>): void {
		const accessToken: string | null = response.headers.get('access-token');
		const uid: string | null = response.headers.get('uid');
		const client: string | null = response.headers.get('client');

		if (accessToken && uid && client) {
			this.saveAuthData({ uid, accessToken, client });
			this._isLoggedIn$.next(true);
		}
	}

	public logOut(): void {
		this.storageService.remove(this.authDataKey);
		this._isLoggedIn$.next(false);
	}

	public saveAuthData(authData: IAuthData): void {
		this.storageService.add(this.authDataKey, authData);
	}

	public getAuthData(): IAuthData | null {
		return this.storageService.get(this.authDataKey);
	}
}
