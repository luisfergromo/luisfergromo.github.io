import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "luisfergromo-web";
  name = "LuisFerGRomo";
  completeName ="Luis Gutiérrez";
  printPdf() {
    window.print();
  }
  
}
