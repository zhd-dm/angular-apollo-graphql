import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    templateUrl: './home.component.html',
    selector: 'home',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
