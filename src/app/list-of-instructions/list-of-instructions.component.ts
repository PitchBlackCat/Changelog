import {Component, OnInit} from '@angular/core';
import {SelectedVersions, UpgradeService} from '../upgrade.service';
import {filter, map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-of-instructions',
  templateUrl: './list-of-instructions.component.html',
  styleUrls: ['./list-of-instructions.component.sass'],
  host: {style: 'display: block'}
})
export class ListOfInstructionsComponent implements OnInit {
  private versionRange$: Observable<string[]>;

  constructor(readonly upgradeService: UpgradeService) {
  }

  ngOnInit() {
    this.versionRange$ = this.upgradeService.selectedVersions$
      .pipe(
        filter(v => !!v.fv && !!v.tv),
        switchMap(v => this.getVersionsBetween(v))
      );
  }

  public getInstructionsFor(version: string) {
    return this.upgradeService.getInstructionsFor(version);
  }

  private getVersionsBetween(s: SelectedVersions): Observable<string[]> {
    return this.upgradeService.versions$.pipe(
      map(v => v.sort()),
      map(v => {
        const result = [];
        let adding = false;
        for (let i = 0; i < v.length; i++) {
          if (adding) {
            result.push(v[i]);
          }

          if (v[i] === s.fv) {
            adding = true;
          }

          if (v[i] === s.tv) {
            break;
          }
        }
        return result;
      }),
    );
  }
}
