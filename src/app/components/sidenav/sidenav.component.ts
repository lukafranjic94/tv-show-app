import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ILink } from 'src/app/interfaces/link.interface';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
	public links: Array<ILink> = [
		{
			title: 'All shows',
			url: '',
		},
		{
			title: 'Top rated',
			url: '/top-rated',
		},
		{
			title: 'My profile',
			url: '/profile',
		},
	];

	constructor() {}
}
