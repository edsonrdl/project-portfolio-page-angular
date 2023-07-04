import { Component , Renderer2, ElementRef, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faBars, faChevronDown,faXmarksLines,faLaptopCode,faXmark,} from '@fortawesome/free-solid-svg-icons';
import { ModulesListCareer } from '../home/model-list-career';
import { ModulesListProjects } from '../home/model-list-projects';


@Component({
  selector: 'app-menu',
  templateUrl: 'academic-career.component.html',
  styleUrls: ['./academic-career.component.scss']

})
export class AcademicCareerComponent {
  faXmark=faXmark
  faLaptopCode=faLaptopCode
  faChevronDown=faChevronDown
  faBars=faBars
  faXmarksLines=faXmarksLines
  ModulesListProjects: Array<any>;
  ModulesListCareer:Array<any>;
  enteredButton = false;
  isMatMenuOpen = false;
  isMatMenu2Open = false;
  prevButtonTrigger:any;

  constructor(private ren: Renderer2 ,private dialogRef: MatDialog,private elementRef: ElementRef) {
    this.ModulesListProjects = ModulesListProjects;
    this.ModulesListCareer = ModulesListCareer;
    this.changeText = false;
  }

  hide(): void {
    const elem = document.getElementById('popup1');
    elem!.style.display = 'none';
  }

  changeText: boolean;
  teste1(){
  }
  btnMobile(event: Event){
    const navMenuMobile=document.getElementById('nav-menu-mobile');
    navMenuMobile?.classList.toggle('nav-menu-mobile-active');
    const faChevronDown=document.getElementById('faBars');
    faChevronDown?.classList.toggle('faBars-disabled');
    const faXmark=document.getElementById('faXmark');
    faXmark?.classList.toggle('faXmark-active');
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = this.elementRef.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  minhaFuncao(): void {
    // Implemente sua lógica aqui
    console.log('O botão foi clicado!');
  }
  menuenter() {
    this.isMatMenu2Open = true;
  }

  menuLeave(trigger1:any, trigger2:any, button:any) {
    setTimeout(() => {
      if (this.isMatMenu2Open) {
        trigger1.closeMenu();
        this.isMatMenuOpen = false;
        this.enteredButton = false;
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.isMatMenu2Open = false;
        trigger2.closeMenu();
      }
    }, 100)
  }
  copyToClipboard(text: string) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Copiado: ' + text);
  }
}

