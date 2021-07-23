import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { IRawReview } from 'src/app/interfaces/rawReview.interface';
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

	constructor(private http: HttpClient) {}
}
