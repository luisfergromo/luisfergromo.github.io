import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./index/index.component";
import { environment } from "src/environments/environment";
import { ServiceWorkerModule } from "@angular/service-worker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { SpaComponent } from "./spa/spa.component";

@NgModule({
  declarations: [AppComponent, IndexComponent, SpaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    /* Remove this comment to make PWA
     * ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
     * */
  ],
  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
