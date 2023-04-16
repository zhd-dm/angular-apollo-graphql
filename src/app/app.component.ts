import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {ApolloQueryResult} from '@apollo/client';
import {DragonsQuery, GqlSdkService} from 'libs/graphql/queries/dragon.generated';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    title = 'angular-apollo-graphql';

    // eslint-disable-next-line @typescript-eslint/member-ordering
    private readonly dragons = new Observable<ApolloQueryResult<DragonsQuery>>();

    constructor(@Inject(GqlSdkService) private readonly gqlSdkService: GqlSdkService) {
        this.dragons.subscribe(res => console.warn(res));
        this.dragons = this.gqlSdkService.dragons();
    }
}
