import { Component } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentDate = new Date();
}
