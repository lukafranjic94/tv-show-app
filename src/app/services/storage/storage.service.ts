import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class StorageService {
	constructor() {}

	public add(key: string, data: any): void {
		localStorage.setItem(key, JSON.stringify(data));
	}

	public get(key: string): any {
		const data: string | null = localStorage.getItem(key);
		if (data) {
			return JSON.parse(data);
		}
		return null;
	}

	public remove(key: string): void {
		localStorage.removeItem(key);
	}
}
