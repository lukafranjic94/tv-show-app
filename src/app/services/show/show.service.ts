import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { IRawShow } from 'src/app/interfaces/rawShow.interface';
import { Show } from './show.model';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	private rawShows: Array<IRawShow> = [
		{
			title: 'Battlestar Galactica',
			description:
				'Battlestar Galactica (BSG) is an American military science fiction television series, and part of the Battlestar Galactica franchise. The show was developed by Ronald D. Moore and executive produced by Moore and David Eick as a re-imagining of the 1978 Battlestar Galactica television series created by Glen A. Larson.',
			average_rating: 4.1,
			image_url: 'https://images-na.ssl-images-amazon.com/images/I/81x1wKmDkFL._SL1500_.jpg',
			id: '1',
		},
		{
			title: 'Breaking Bad',
			description:
				'Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan. The show aired on AMC from January 20, 2008, to September 29, 2013, consisting of five seasons for a total of 62 episodes. It was set and filmed in Albuquerque, New Mexico, and tells the story of Walter White (Bryan Cranston), an underpaid, overqualified and dispirited high school chemistry teacher who is struggling with a recent diagnosis of stage-three lung cancer.',
			average_rating: 4.7,
			image_url:
				'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
			id: '2',
		},
		{
			title: 'General',
			description:
				'rati životnu pripovijest hrvatskog ratnog junaka, generala Ante Gotovine. Sniman je na lokacijama u Zagrebu, Šibeniku i Livnu. Snimljen je u koprodukciji tvrtke Kiklop film i HRT-a, a podržan je od strane Hrvatskog audiovizualnog centra. Smatra ga se najočekivanijim hrvatskim filmom svih vremena.',
			average_rating: 2.5,
			image_url:
				'https://www.croatiaweek.com/wp-content/uploads/2019/07/MV5BZmMxYWM3NjAtYjcyZS00ZTEzLTg4ZjctMDY3NDEwYTY0MjQzXkEyXkFqcGdeQXVyNzQwNzQwMjA@._V1_SY1000_CR006951000_AL_.jpg?x61649',
			id: '3',
		},
	];

	constructor() {}

	private get shows(): Array<Show> {
		return this.rawShows.map((rawShow: IRawShow) => new Show(rawShow));
	}

	public getShows(): Observable<Array<Show>> {
		return of(this.shows).pipe(delay(1000 + Math.random() * 1000));
	}

	public getTopRated(): Observable<Array<Show>> {
		return this.getShows().pipe(map((shows: Array<Show>) => shows.filter((show: Show) => show.averageRating > 4)));
	}

	public getShow(id: string): Observable<Show | undefined> {
		return this.getShows().pipe(map((shows: Array<Show>) => shows.find((show: Show) => show.id === id)));
	}
}
