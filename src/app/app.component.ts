import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentRoute: string;
  previousRoute: string;

  routesObj = {};

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const obj = sessionStorage.getItem('routesObj');

        if (!obj) {
          this.routesObj['currentRoute'] = event;
          this.routesObj['previousRoute'] = '';
          sessionStorage.setItem('routesObj', JSON.stringify(this.routesObj));
        } else {
          const parsedObj = JSON.parse(obj);
          this.routesObj['previousRoute'] = parsedObj['currentRoute'];
          this.routesObj['currentRoute'] = event;
          sessionStorage.setItem('routesObj', JSON.stringify(this.routesObj));
        }
      });
  }
}
