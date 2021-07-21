import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RegistrationFormData } from './components/registration-form/registration-form.component';

@Component({
	selector: 'app-registration-container',
	templateUrl: './registration-container.component.html',
	styleUrls: ['./registration-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationContainerComponent implements OnInit {
	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit(): void {}

	public onRegister(registrationFormData: RegistrationFormData): void {
		this.authService.onRegister(registrationFormData).subscribe((registrationFormData) => {
			console.log(registrationFormData);
			this.router.navigate(['']);
		});
	}
}
