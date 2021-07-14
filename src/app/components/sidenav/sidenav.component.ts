import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ILink } from 'src/app/interfaces/link.interface';

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

	constructor() {}

	ngOnInit(): void {}
}
