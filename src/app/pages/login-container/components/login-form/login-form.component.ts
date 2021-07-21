import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface LoginFormData {
	email: string;
	password: string;
}

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
	@Output() login: EventEmitter<LoginFormData> = new EventEmitter();

	public loginFormGroup: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required]],
	});
	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {}

	public onLogin(): void {
		this.login.emit(this.loginFormGroup.value);
		this.loginFormGroup.reset();
	}
}
