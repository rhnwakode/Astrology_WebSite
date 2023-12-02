import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentModule } from '../../material-component.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MaterialComponentModule, FooterComponent]
})
export class HomeComponent {

  screenWidth: number;
  showMenu = false;

  constructor() {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.showMenu = false;
    this.screenWidth = window.innerWidth;
  }

}
