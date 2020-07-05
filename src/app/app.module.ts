import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProjectsComponent } from "./projects/projects.component";
import { IndexComponent } from "./index/index.component";
import { BlogComponent } from "./blog/blog.component";
import { environment } from "src/environments/environment";
import { ServiceWorkerModule } from "@angular/service-worker";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProjectsComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
