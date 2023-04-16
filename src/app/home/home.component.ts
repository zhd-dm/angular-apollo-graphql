import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
    standalone: true,
    templateUrl: './home.component.html',
    selector: 'home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterModule],
})
export class HomeComponent {}
