import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { IRawReview } from 'src/app/interfaces/rawReview.interface';
import { ReviewFormData } from 'src/app/pages/show-details-container/components/review-form/review-form.component';
import { IReviewData } from 'src/app/pages/show-details-container/show-details-container.component';
import { Review } from './review.model';

@Injectable({
	providedIn: 'root',
})
export class ReviewService {
	public getReviewsForShowId(showId: string): Observable<Array<Review>> {
		return this.http
			.get<{ reviews: Array<IRawReview> }>(`https://tv-shows.infinum.academy/shows/${showId}/reviews`)
			.pipe(map((response) => response.reviews.map((rawReview) => new Review(rawReview))));
	}

	public addReview(reviewData: IReviewData): Observable<Review> {
		return this.http
			.post<{ review: IRawReview }>('https://tv-shows.infinum.academy/reviews', {
				comment: reviewData.comment,
				rating: reviewData.rating,
				show_id: reviewData.showId,
			})
			.pipe(map((response) => new Review(response.review)));
	}

	constructor(private http: HttpClient) {}
}
