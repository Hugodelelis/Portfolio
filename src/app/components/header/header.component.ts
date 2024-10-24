import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

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

  #themeService = inject(ThemeService)

  get theme() {
    return this.#themeService.theme();
  }

  buttonTheme: string = 'theme-toggle'

  getSelectTheme() {
    this.#themeService.selectTheme()
  }
}
