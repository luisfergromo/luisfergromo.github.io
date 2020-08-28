import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
  title = "index-view";
  name = "LuisFerGRomo";
  constructor() {}

  ngOnInit(): void {}
  printPdf() {
    window.print();
  }
}
