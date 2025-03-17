import { Component} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, MatButtonModule, RouterModule, CommonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'popularGlasses';

  isHomepage: boolean = true;
  isMenuOpen = false; // Toggle menu state

  constructor(private Router: Router){
    this.Router.events.subscribe(() => {
      this.isHomepage = this.Router.url === '/';
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
