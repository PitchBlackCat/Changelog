import { Component } from '@angular/core';
import {UpgradeService} from './upgrade.service';
import {Observable} from 'rxjs';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'changelog';
  private name$: Observable<string>;


  constructor(readonly changelogService: UpgradeService, readonly titleService: Title) {
    this.name$ = this.changelogService.name$;

    this.changelogService.name$.subscribe(n => this.titleService.setTitle(`${n} - Changelog`));
  }
}
