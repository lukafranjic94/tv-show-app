import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRawUser } from 'src/app/interfaces/user.interface';
import { ApiPaths, environment } from 'src/environments/environment';
import { User } from './user.model';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private baseUrl: string = environment.baseUrl;

	constructor(private http: HttpClient) {}

	public addProfileImage(profileImageData: FormData): Observable<User> {
		return this.http.put<{ user: IRawUser }>(`${this.baseUrl}${ApiPaths.Auth}`, profileImageData).pipe(
			map((response) => {
				return new User(response.user);
			})
		);
	}

	public getUser(): Observable<User> {
		return this.http.get<{ user: IRawUser }>(`${this.baseUrl}${ApiPaths.Auth}/me`).pipe(
			map((response) => {
				return new User(response.user);
			})
		);
	}
}
