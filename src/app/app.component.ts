import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-angular-app';
  name!: string;
  public age: number = 15;
  isBlue: boolean = false;
  data: any = [
    { id: 1, name: 'bas' },
    { id: 2, name: 'ma' },
    { id: 3, name: 'oma' },
  ];
}
