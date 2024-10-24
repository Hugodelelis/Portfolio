import { Component, signal } from '@angular/core';
import { IContacts } from '../../interfaces/contacts.interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  medias = signal<IContacts[]>([
    {
      src: 'assets/icons/linkedin.svg',
      alt: 'https://www.linkedin.com/in/hugo-lelis-a873392b8/',
      title: 'Linkedin',
      backgroundColor: 'var(--pink-010)',
    },
    {
      src: 'assets/icons/gmail.svg',
      alt: 'mailto:hugolelis00@gmail.com',
      title: 'gmail',
      backgroundColor: 'var(--yellow-010)',
    },
    {
      src: 'assets/icons/instagram.svg',
      alt: 'https://www.instagram.com/hugow.l/',
      title: 'instagram',
      backgroundColor: 'var(--lavanger-010)',
    },
  ])
}

