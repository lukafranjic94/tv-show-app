import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface ILoginFormData {
	email: string;
	password: string;
}

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
	@Output() public login: EventEmitter<ILoginFormData> = new EventEmitter<ILoginFormData>();

	public loginFormGroup: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required]],
	});

	constructor(private fb: FormBuilder) {}

	public onLogin(): void {
		this.login.emit(this.loginFormGroup.value);
	}
}
