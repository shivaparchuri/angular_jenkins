import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Jenkins1Component } from './jenkins1/jenkins1.component';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    Jenkins1Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
