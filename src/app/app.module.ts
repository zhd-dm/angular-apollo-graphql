import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {GraphQLModule} from './graphql.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, GraphQLModule, HttpClientModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
