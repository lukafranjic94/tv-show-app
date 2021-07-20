import { EmitterVisitorContext } from '@angular/compiler';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface RegistrationFormData {
	email: string;
	password: string;
	passwordConfirmation: string;
}

@Component({
	selector: 'app-registration-form',
	templateUrl: './registration-form.component.html',
	styleUrls: ['./registration-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent implements OnInit {
	@Output() register: EventEmitter<RegistrationFormData> = new EventEmitter();
	public registrationFormGroup: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required, Validators.minLength(8)]],
		passwordConfirmation: ['', [Validators.required]],
	});

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {}

	public onRegister(): void {
		this.register.emit(this.registrationFormGroup.value);
		this.registrationFormGroup.reset();
	}
}
