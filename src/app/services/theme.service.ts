import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme = signal<'white-theme' | 'black-theme'>(localStorage.getItem('theme') as 'white-theme' | 'black-theme' || 'white-theme');

  selectTheme() {
    if (this.theme() === 'white-theme') {
      this.theme.set('black-theme');
    } else {
      this.theme.set('white-theme');
    }

    localStorage.setItem('theme', this.theme());

    return this.theme();
  }
}
