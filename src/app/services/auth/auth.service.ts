import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationFormData } from 'src/app/pages/registration-container/components/registration-form/registration-form.component';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private http: HttpClient) {}
	public onRegister(registrationFormData: RegistrationFormData): Observable<RegistrationFormData> {
		return this.http.post<RegistrationFormData>('https://tv-shows.infinum.academy/users', registrationFormData);
	}
}