import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { catchError, map, retry, switchMap } from 'rxjs/operators';
import { Review } from 'src/app/services/review/review.model';
import { ReviewService } from 'src/app/services/review/review.service';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';
import { IReviewFormData } from './components/review-form/review-form.component';

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
	public templateData$: Subject<ITemplateData | undefined> = new Subject<ITemplateData | undefined>();
	private show$: Observable<Show | undefined>;
	private reviews$: Observable<Array<Review> | undefined>;
	public errorObject: Error;
	constructor(private showService: ShowService, private route: ActivatedRoute, private reviewService: ReviewService) {}

	ngOnInit(): void {
		this.show$ = this.route.paramMap.pipe(
			switchMap((paramMap: ParamMap) => {
				const id: string | null = paramMap.get('id');
				if (id) {
					return this.showService.getShow(id);
				}
				return of(undefined);
			})
		);
		this.reviews$ = this.route.paramMap.pipe(
			switchMap((paramMap: ParamMap) => {
				const id: string | null = paramMap.get('id');
				if (id) {
					return this.reviewService.getReviewsForShowId(id);
				}
				return of(undefined);
			})
		);
		this.getTemplateDataObservable().subscribe(this.templateData$);
	}

	private getTemplateDataObservable(): Observable<ITemplateData | undefined> {
		return combineLatest([this.show$, this.reviews$]).pipe(
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

	public onAddReview(reviewFormData: IReviewFormData): void {
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
				}),
				switchMap(() => {
					return this.getTemplateDataObservable();
				})
			)
			.subscribe((templateData: ITemplateData | undefined) => {
				this.templateData$.next(templateData);
			});
	}
}
