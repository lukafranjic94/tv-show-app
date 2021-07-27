import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRawReview } from 'src/app/interfaces/rawReview.interface';
import { IReviewData } from 'src/app/pages/show-details-container/show-details-container.component';
import { ApiPaths, environment } from 'src/environments/environment';
import { Review } from './review.model';

@Injectable({
	providedIn: 'root',
})
export class ReviewService {
	private baseUrl: string = environment.baseUrl;
	public getReviewsForShowId(showId: string): Observable<Array<Review>> {
		return this.http
			.get<{ reviews: Array<IRawReview> }>(`${this.baseUrl}${ApiPaths.Shows}/${showId}${ApiPaths.Reviews}`)
			.pipe(map((response) => response.reviews.map((rawReview: IRawReview) => new Review(rawReview))));
	}

	public addReview(reviewData: IReviewData): Observable<Review> {
		return this.http
			.post<{ review: IRawReview }>(`${this.baseUrl}${ApiPaths.Reviews}`, {
				comment: reviewData.comment,
				rating: reviewData.rating,
				show_id: reviewData.showId,
			})
			.pipe(map((response) => new Review(response.review)));
	}

	public deleteReview(reviewId: string): Observable<any> {
		return this.http.delete(`${this.baseUrl}${ApiPaths.Reviews}/${reviewId}`);
	}

	constructor(private http: HttpClient) {}
}
