import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewComponent implements OnInit {
	@Input() comment: string;
	@Input() rating: number;

	constructor() {}

	ngOnInit(): void {}
}
