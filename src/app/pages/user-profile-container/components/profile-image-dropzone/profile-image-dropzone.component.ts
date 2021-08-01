import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'app-profile-image-dropzone',
	templateUrl: './profile-image-dropzone.component.html',
	styleUrls: ['./profile-image-dropzone.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileImageDropzoneComponent {
	@Input() public userImageUrl: string;
	@Output() public selectImage: EventEmitter<FileList | null> = new EventEmitter<FileList | null>();

	constructor() {}

	public onSelectImage(fileList: FileList | null): void {
		this.selectImage.emit(fileList);
	}

	public onDrop(event: DragEvent): void {
		this.preventDefaults(event);
		if (event.dataTransfer) {
			this.onSelectImage(event.dataTransfer.files);
		}
	}

	public onDragOver(event: DragEvent): void {
		this.preventDefaults(event);
	}

	public onDragEnter(event: DragEvent): void {
		this.preventDefaults(event);
	}

	private preventDefaults(event: Event): void {
		event.stopPropagation();
		event.preventDefault();
	}
}
