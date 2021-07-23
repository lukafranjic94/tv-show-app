import { FormControl, ValidationErrors } from '@angular/forms';

export function palindromeValidator(control: FormControl): ValidationErrors | null {
	const enteredValue: string = control.value || '';
	if (!enteredValue) {
		return null;
	}
	const addressSignIndex: number = enteredValue.indexOf('@');
	if (addressSignIndex === -1) {
		return null;
	}
	const emailUsername: string = enteredValue.slice(0, addressSignIndex);
	if (emailUsername === emailUsername.split('').reverse().join('')) {
		return { palindrome: 'Email username is a palindrome!' };
	}
	return null;
}
