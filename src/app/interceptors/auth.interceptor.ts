import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { IAuthData } from '../interfaces/auth-data.interface';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private authService: AuthService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const authData: IAuthData | null = this.authService.getAuthData();
		let finalRequest: HttpRequest<unknown> = request;
		if (authData) {
			finalRequest = request.clone({
				headers: new HttpHeaders({
					uid: authData.uid,
					client: authData.client,
					'access-token': authData.accessToken,
				}),
			});
		}
		return next.handle(finalRequest);
	}
}
