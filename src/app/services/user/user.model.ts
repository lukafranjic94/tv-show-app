import { IUser } from 'src/app/interfaces/user.interface';

export class User {
	public id: string;
	public email: string;
	public imageUrl: string;
	constructor(rawUser: IUser) {
		this.id = rawUser.id;
		this.email = rawUser.email;
		this.imageUrl = rawUser.image_url;
	}
}
