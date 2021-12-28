import { Component, OnInit } from "@angular/core";
import currentData from '../../assets/testJson.json';
import curriculumData from '../../assets/SampleJson.json'

interface Data{
  id:Number;
  name:String;
  description:String;
}
interface Experiences{
  id:Number;
  initialYear:Number;
  position:String;
  location:String;
  latestProjects: any;
  tasks: any;
}
interface Education{
  id:Number;
  title:String;
  initialYear:Number;
  endingYear: Number;
  tasks:any;
  company:any;
}
@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
  title = "index-view";
  name = "LuisFerGRomo";

  ngOnInit(): void {
  }
  printPdf() {
    window.print();
  }
  
  someData:Data[] = currentData[0].someData;
  experiences:Experiences[] = curriculumData[0].experiences;
  education:Education[] = curriculumData[0].education;
}
