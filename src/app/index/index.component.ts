import { Component, OnInit } from "@angular/core";
import curriculumData from '../../assets/SampleJson.json';

interface Experiences {
  id: Number;
  initialYear: Number;
  endYear?: Number;
  position: String;
  location?: String;
  company?: String;
  duration?: String;
  latestProjects?: any;
  tasks: any;
}

interface Education {
  id: Number;
  title: String;
  initialYear: Number;
  endingYear: Number;
  tasks: any;
  company: any;
}

interface Tools {
  name: String;
  elements: any;
  icon: String;
}

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
  title = "index-view";
  name = "LuisFerGRomo";
  completeName = "Luis Fernando Gutiérrez Romo";

  ngOnInit(): void {}

  printPdf() {
    window.print();
  }

  experiences: Experiences[] = curriculumData[0].experiences;
  education: Education[] = curriculumData[0].education;
  tools: Tools[] = curriculumData[0].tools;
}
