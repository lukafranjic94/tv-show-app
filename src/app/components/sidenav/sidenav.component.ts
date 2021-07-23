import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ILink } from 'src/app/interfaces/link.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
	public links: Array<ILink> = [
		{
			title: 'All shows',
			url: '',
		},
		{
			title: 'Top rated',
			url: '/top-rated',
		},
	];

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit(): void {}

	public logOut(): void {
		this.authService.onLogout();
		this.router.navigate(['/login']);
	}
}
