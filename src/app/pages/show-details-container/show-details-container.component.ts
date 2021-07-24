import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError, map, retry, switchMap } from 'rxjs/operators';
import { IRawReview } from 'src/app/interfaces/rawReview.interface';
import { Review } from 'src/app/services/review/review.model';
import { ReviewService } from 'src/app/services/review/review.service';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';
import { ReviewFormData } from './components/review-form/review-form.component';

interface ITemplateData {
	show: Show | undefined;
	reviews: Array<Review> | undefined;
}

export interface IReviewData {
	comment: string;
	rating: number;
	showId: string;
}

@Component({
	selector: 'app-show-details-container',
	templateUrl: './show-details-container.component.html',
	styleUrls: ['./show-details-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDetailsContainerComponent implements OnInit {
	public templateData$: Observable<ITemplateData | undefined>;
	public errorObject: Error;
	constructor(private showService: ShowService, private route: ActivatedRoute, private reviewService: ReviewService) {}

	ngOnInit(): void {
		const show$: Observable<Show | undefined> = this.route.paramMap.pipe(
			switchMap((paramMap: ParamMap) => {
				const id: string | null = paramMap.get('id');
				if (id) {
					return this.showService.getShow(id);
				}
				return of(undefined);
			})
		);
		const reviews$: Observable<Array<Review> | undefined> = this.route.paramMap.pipe(
			switchMap((paramMap: ParamMap) => {
				const id: string | null = paramMap.get('id');
				if (id) {
					return this.reviewService.getReviewsForShowId(id);
				}
				return of(undefined);
			})
		);
		this.templateData$ = combineLatest([show$, reviews$]).pipe(
			map(([show, reviews]: [Show | undefined, Array<Review> | undefined]) => {
				return {
					show,
					reviews,
				};
			}),
			retry(1),
			catchError((error: Error) => {
				this.errorObject = error;
				return of(undefined);
			})
		);
	}

	public onAddReview(reviewFormData: ReviewFormData): void {
		this.route.paramMap
			.pipe(
				switchMap((paramMap: ParamMap) => {
					const showId: string | null = paramMap.get('id');
					if (showId) {
						return this.reviewService.addReview({
							showId,
							comment: reviewFormData.comment,
							rating: reviewFormData.rating,
						});
					}
					return of(undefined);
				})
			)
			.subscribe((review: Review | undefined) => console.log(review));
	}
}
