import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-spa",
  templateUrl: "./spa.component.html",
  styleUrls: ["./spa.component.css"],
})
export class SpaComponent implements OnInit {
  name = "LuisFerGRomo";
  constructor() {}

  ngOnInit(): void {}
  printPdf() {
    window.print();
  }
}
