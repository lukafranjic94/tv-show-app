import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-user-profile-container',
	templateUrl: './user-profile-container.component.html',
	styleUrls: ['./user-profile-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileContainerComponent implements OnInit {
	public email: string | undefined;
	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		this.email = this.authService.getAuthData()?.uid;
	}
}
