import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginFormData } from './components/login-form/login-form.component';

@Component({
	selector: 'app-login-container',
	templateUrl: './login-container.component.html',
	styleUrls: ['./login-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent implements OnInit {
	public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) {}

	ngOnInit(): void {}

	public onLogin(loginFormData: LoginFormData): void {
		this.isLoading$.next(true);
		this.authService
			.onLogin(loginFormData)
			.pipe(
				finalize(() => {
					this.isLoading$.next(false);
				})
			)
			.subscribe(
				(loginFormData: LoginFormData) => {
					console.log(loginFormData);
					this._snackBar.dismiss();
					this.router.navigate(['']);
				},
				() => {
					this._snackBar.open('Invalid password', 'OK');
				}
			);
	}
}
