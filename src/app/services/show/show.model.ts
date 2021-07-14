import { IRawShow } from 'src/app/interfaces/rawShow.interface';

export class Show {
	public title: string;
	public description: string;
	public averageRating: number;
	public imageUrl: string;
	public id: string;
	constructor(rawShow: IRawShow) {
		this.title = rawShow.title;
		this.description = rawShow.description;
		this.averageRating = rawShow.average_rating;
		this.imageUrl = rawShow.image_url;
		this.id = rawShow.id;
	}
	public calcPercentageRating(): number {
		const percentageRating: number = (100 * (this.averageRating - 1)) / (5 - 1);
		return percentageRating;
	}
}
