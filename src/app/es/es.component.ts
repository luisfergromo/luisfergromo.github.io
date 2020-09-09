import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-es",
  templateUrl: "./es.component.html",
  styleUrls: ["./es.component.css"],
})
export class EsComponent implements OnInit {
  name = "LuisFerGRomo";
  constructor() {}

  ngOnInit(): void {}
  printPdf() {
    window.print();
  }
}
