import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/services/user/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-user-profile-container',
	templateUrl: './user-profile-container.component.html',
	styleUrls: ['./user-profile-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileContainerComponent {
	private fetchTrigger$: BehaviorSubject<void> = new BehaviorSubject<void>(undefined);
	public user$: Observable<User> = this.fetchTrigger$.pipe(
		switchMap(() => {
			return this.userService.getUser();
		})
	);

	constructor(private userService: UserService) {}

	public handleFiles(files: FileList | null): void {
		if (!files || files.length !== 1) {
			return;
		}

		const fileArr: Array<File> = Array.from(files);
		const file: File = fileArr[0];
		const imageRegExp: RegExp = new RegExp('^image*');

		if (!imageRegExp.test(file.type) || file.size > 1e6) {
			return;
		}

		const formData: FormData = new FormData();
		formData.append('image', file);
		this.userService.addProfileImage(formData).subscribe(() => {
			this.fetchTrigger$.next(undefined);
		});
	}
}
