import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/services/user/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-user-profile-container',
	templateUrl: './user-profile-container.component.html',
	styleUrls: ['./user-profile-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileContainerComponent {
	public user$: Observable<User> = this.userService.getUser();
	constructor(private authService: AuthService, private userService: UserService) {}

	public drop(event: any): void {
		event.preventDefault();
		event.stopPropagation();
		this.handleFiles(event.dataTransfer.files);
	}

	public dragOver(event: any): void {
		event.preventDefault();
		event.stopPropagation();
	}

	public dragLeave(event: any): void {
		event.preventDefault();
		event.stopPropagation();
	}

	public handleFiles(files: FileList | null): void {
		if (files && files.length === 1) {
			const fileArr: Array<File> = Array.from(files);
			const file: File = fileArr[0];
			const formData: FormData = new FormData();
			formData.append('image', file);
			this.userService.addProfileImage(formData).subscribe();
		}
	}
}
