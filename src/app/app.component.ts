import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { FormService } from './form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FormService]
})
export class AppComponent implements OnInit {
  title = 'Gradient Able 5+';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
