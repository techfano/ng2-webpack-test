import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VideoService } from './demoUnitTest/service/video.service';

@NgModule({
    imports: [
        BrowserModule,
    ],
    providers: [VideoService],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
