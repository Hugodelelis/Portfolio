import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutComponent } from '../../components/about/about.component';
import { StacksComponent } from '../../components/stacks/stacks.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, StacksComponent, ProjectsComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
