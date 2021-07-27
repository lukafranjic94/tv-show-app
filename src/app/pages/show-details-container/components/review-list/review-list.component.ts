import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Review } from 'src/app/services/review/review.model';

@Component({
	selector: 'app-review-list',
	templateUrl: './review-list.component.html',
	styleUrls: ['./review-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewListComponent implements OnInit {
	@Input() reviews: Array<Review>;
	@Input() userEmail: string;
	@Output() deleteReview: EventEmitter<string> = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}
	public onDeleteReview(reviewId: string): void {
		this.deleteReview.emit(reviewId);
	}
}
