import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Review } from 'src/app/services/review/review.model';

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewComponent {
	@Input() public review: Review;
	@Input() public currentUserEmail: string;
	@Output() public deleteReview: EventEmitter<string> = new EventEmitter<string>();

	constructor() {}

	public onDeleteReview(): void {
		this.deleteReview.emit(this.review.id);
	}
}
