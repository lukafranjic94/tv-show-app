import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent implements OnInit {
	@Input() public rating: number;

	constructor() {}

	ngOnInit(): void {
		this.rating = parseFloat(this.rating.toFixed(2));
	}
}
