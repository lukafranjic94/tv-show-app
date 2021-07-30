import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewComponent implements OnInit {
	@Input() comment: string;
	@Input() rating: number;
	@Input() userEmail: string;
	@Input() userImageUrl: string;
	@Input() id: string;
	@Input() currentUserEmail: string;
	@Output() deleteReview: EventEmitter<string> = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	public onDeleteReview(): void {
		this.deleteReview.emit(this.id);
	}
}
