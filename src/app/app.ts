import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './core/nav/nav';
import { Footer } from './core/footer/footer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
