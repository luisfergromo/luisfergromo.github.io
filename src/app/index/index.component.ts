import { Component, OnInit, HostListener } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import curriculumData from '../../assets/resume-data.json';

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
  isMenuCollapsed: boolean = true;
  currentSection: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    localStorage.setItem('preferredLang', 'en');
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          this.scrollTo(fragment);
        }, 150);
      }
    });
  }

  toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  closeMenu(): void {
    this.isMenuCollapsed = true;
  }

  scrollTo(sectionId: string): void {
    this.closeMenu();
    this.currentSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.updateCurrentSection();
  }

  updateCurrentSection(): void {
    const sections = ['contact', 'experience', 'resume', 'about'];
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop - 180;
        if (scrollPosition >= top) {
          this.currentSection = sectionId;
          return;
        }
      }
    }
    this.currentSection = '';
  }

  switchLanguage(): void {
    this.closeMenu();
    localStorage.setItem('preferredLang', 'es');
    const targetSection = this.currentSection || this.route.snapshot.fragment;
    if (targetSection) {
      this.router.navigate(['/spa'], { fragment: targetSection });
    } else {
      this.router.navigate(['/spa']);
    }
  }

  printPdf() {
    window.print();
  }

  experiences: Experiences[] = curriculumData[0].experiences;
  education: Education[] = curriculumData[0].education;
  tools: Tools[] = curriculumData[0].tools;
}
