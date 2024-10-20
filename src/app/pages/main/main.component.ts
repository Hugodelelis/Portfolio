import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeComponent } from '../../components/home/home.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, HomeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
