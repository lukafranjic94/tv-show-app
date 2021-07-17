import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { IRawReview } from 'src/app/interfaces/rawReview.interface';
import { Review } from './review.model';

@Injectable({
	providedIn: 'root',
})
export class ReviewService {
	private rawReviews: Array<IRawReview> = [
		{
			comment: 'Not bad at all',
			rating: 4.1,
			id: '1',
			show_id: '2',
		},
		{
			comment: 'What even is this show??',
			rating: 1.5,
			id: '2',
			show_id: '3',
		},
		{
			comment: 'Pretty good',
			rating: 4.8,
			id: '3',
			show_id: '2',
		},
		{
			comment: 'Simply amazing',
			rating: 5,
			id: '4',
			show_id: '2',
		},
	];

	private get reviews(): Array<Review> {
		return this.rawReviews.map((rawReview: IRawReview) => new Review(rawReview));
	}

	public getReviews(): Observable<Array<Review>> {
		return of(this.reviews).pipe(delay(1000 + Math.random() * 1000));
	}

	constructor() {}
}
