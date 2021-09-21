import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-form-layout',
	templateUrl: './form-layout.component.html',
	styleUrls: ['./form-layout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLayoutComponent {
	constructor() {}
}
