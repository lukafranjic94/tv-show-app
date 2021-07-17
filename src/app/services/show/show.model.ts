import { IRawShow } from 'src/app/interfaces/rawShow.interface';
import { Review } from '../review/review.model';

export class Show {
	public title: string;
	public description: string;
	public imageUrl: string;
	public id: string;
	public reviews: Array<Review>;
	constructor(rawShow: IRawShow) {
		this.title = rawShow.title;
		this.description = rawShow.description;
		this.imageUrl = rawShow.image_url;
		this.id = rawShow.id;
		this.reviews = [];
	}
	public get averageRating(): number {
		if (this.reviews.length === 0) {
			return 0;
		}
		let average: number = this.reviews.map((review) => review.rating).reduce((a, b) => a + b) / this.reviews.length;
		return average;
	}
	public calcPercentageRating(): number {
		const percentageRating: number = (100 * (this.averageRating - 1)) / (5 - 1);
		return percentageRating;
	}
}
