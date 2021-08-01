import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormControl,
	FormGroup,
	FormGroupDirective,
	NgForm,
	Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { palindromeValidator } from 'src/app/validators/palindrome.validator';
import { passwordConfirmationValidator } from 'src/app/validators/password-confirmation.validator';

export interface IRegistrationFormData {
	email: string;
	password: string;
	passwordConfirmation: string;
}

class PasswordGroupStateMatcher implements ErrorStateMatcher {
	constructor(private errors: Array<string>) {}
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		return !!(
			(control?.dirty || control?.touched) &&
			form?.invalid &&
			this.errors.some((error: string) => form.hasError(error))
		);
	}
}

@Component({
	selector: 'app-registration-form',
	templateUrl: './registration-form.component.html',
	styleUrls: ['./registration-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent {
	@Output() public register: EventEmitter<IRegistrationFormData> = new EventEmitter<IRegistrationFormData>();
	public passwordGroupStateMatcher: PasswordGroupStateMatcher = new PasswordGroupStateMatcher(['passwordConfirmation']);
	public registrationFormGroup: FormGroup = this.fb.group(
		{
			email: ['', [Validators.required, Validators.email, palindromeValidator]],
			password: ['', [Validators.required, Validators.minLength(8)]],
			passwordConfirmation: [''],
		},
		{ validators: passwordConfirmationValidator }
	);

	constructor(private fb: FormBuilder) {}

	public onRegister(): void {
		this.register.emit(this.registrationFormGroup.value);
	}

	public get email(): AbstractControl | null {
		return this.registrationFormGroup.get('email');
	}

	public get password(): AbstractControl | null {
		return this.registrationFormGroup?.get('password');
	}
}
