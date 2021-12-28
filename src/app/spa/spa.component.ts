import { Component, OnInit } from "@angular/core";
import curriculumData from '../../assets/SampleJson.json'
interface Experiences{
    id:Number;
  initialYear:Number;
  position_spa:String;
  location:String;
  latestProjects: any;
  tasks: any;
}
interface Education{
  id:Number;
  title_spa:String;
  initialYear:Number;
  endingYear: Number;
  tasks:any;
  company:any;
}
@Component({
  selector: "app-spa",
  templateUrl: "./spa.component.html",
  styleUrls: ["./spa.component.css"],
})
export class SpaComponent implements OnInit {
  name = "LuisFerGRomo";
  completeName ="Luis Gutiérrez";
  constructor() {}

  ngOnInit(): void {}
  printPdf() {
    window.print();
  }
experiences: Experiences[]= curriculumData[0].experiences;
education: Education[]= curriculumData[0].education;
}
