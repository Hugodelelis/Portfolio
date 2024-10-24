import { Component, signal } from '@angular/core';
import { ITechStack } from '../../interfaces/stacks.interface';

@Component({
  selector: 'app-stacks',
  standalone: true,
  imports: [],
  templateUrl: './stacks.component.html',
  styleUrl: './stacks.component.scss'
})
export class StacksComponent {
  techStacks = signal<ITechStack[]>([
    {
      src: 'assets/icons/angular.svg',
      alt: 'angular',
      title: 'Angular',
    },
    {
      src: 'assets/icons/typescript.svg',
      alt: 'typescript',
      title: 'TypeScript',
    },
    {
      src: 'assets/icons/bootstrap.svg',
      alt: 'bootstrap',
      title: 'Bootstrap',
    },
    {
      src: 'assets/icons/sass.svg',
      alt: 'sass',
      title: 'Sass',
    }
  ])
}
