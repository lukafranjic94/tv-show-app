import { IUser } from './user.interface';

export interface IRawReview {
	comment: string;
	rating: number;
	id: string;
	show_id: string;
	user: IUser;
}
