import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordConfirmationValidator(control: AbstractControl): ValidationErrors | null {
	const enteredPassword: string | undefined = control.get('password')?.value;
	const enteredPasswordConfirmation: string | undefined = control.get('passwordConfirmation')?.value;
	return enteredPassword === enteredPasswordConfirmation ? null : { passwordConfirmation: 'Passwords do not match!' };
}
