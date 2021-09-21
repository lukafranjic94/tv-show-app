import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Review } from 'src/app/services/review/review.model';

@Component({
	selector: 'app-review-list',
	templateUrl: './review-list.component.html',
	styleUrls: ['./review-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewListComponent {
	@Input() public reviews: Array<Review>;
	@Input() public currentUserEmail: string;
	@Output() public deleteReview: EventEmitter<string> = new EventEmitter<string>();

	constructor() {}

	public onDeleteReview(reviewId: string): void {
		this.deleteReview.emit(reviewId);
	}
}
