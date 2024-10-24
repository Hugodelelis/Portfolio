import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutComponent } from '../../components/about/about.component';
import { StacksComponent } from '../../components/stacks/stacks.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CoursesComponent } from '../../components/courses/courses.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, StacksComponent, ProjectsComponent, ContactComponent, CoursesComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  #themeService = inject(ThemeService)

  get theme() {
    return this.#themeService.theme();
  }
}
