import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Microfrontend } from './microfrontends/microfrontend';
import { LookupService } from './microfrontends/lookup.service';
import { buildRoutes } from '../menu-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  microfrontends: Microfrontend[] = [];

  constructor(
    private router: Router,
    private lookupService: LookupService
  ) {

  }

  async ngOnInit(): Promise<void> {
    this.microfrontends = await this.lookupService.lookup();
    const routes = buildRoutes(this.microfrontends);
    this.router.resetConfig(routes);
  }
}
