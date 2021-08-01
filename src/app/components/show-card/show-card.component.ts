import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-show-card',
	templateUrl: './show-card.component.html',
	styleUrls: ['./show-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCardComponent {
	@Input() public title: string;
	@Input() public averageRating: number;
	@Input() public imageUrl: string;

	constructor() {}
}
