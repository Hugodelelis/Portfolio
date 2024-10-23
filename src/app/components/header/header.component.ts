import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenu: boolean = false

  stateMenu() {
    if(this.showMenu === false) {
      return this.showMenu = true
    }

    return this.showMenu = false
  }
}
