import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { SpaComponent } from "./spa/spa.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { SkillsComponent } from "./skills/skills.component";

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "spa", component: SpaComponent },
  { path: "eng", component: IndexComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "skills", component: SkillsComponent },
  { path: "habilidades", redirectTo: "skills", pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
