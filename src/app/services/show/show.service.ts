import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRawShow } from 'src/app/interfaces/rawShow.interface';
import { ReviewService } from '../review/review.service';
import { Show } from './show.model';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	constructor(private reviewService: ReviewService, private http: HttpClient) {}

	public getShows(): Observable<Array<Show>> {
		return this.http
			.get<{ shows: Array<IRawShow> }>('https://tv-shows.infinum.academy/shows')
			.pipe(map((response) => response.shows.map((rawShow) => new Show(rawShow))));
	}

	public getTopRated(): Observable<Array<Show>> {
		return this.http
			.get<{ shows: Array<IRawShow> }>('https://tv-shows.infinum.academy/shows/top_rated')
			.pipe(map((response) => response.shows.map((rawShow) => new Show(rawShow))));
	}

	public getShow(id: string): Observable<Show | undefined> {
		return this.http
			.get<{ show: IRawShow }>(`https://tv-shows.infinum.academy/shows/${id}`)
			.pipe(map((response) => new Show(response.show)));
	}
}
