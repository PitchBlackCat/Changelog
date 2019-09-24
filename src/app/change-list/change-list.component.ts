import {Component, OnInit} from "@angular/core";
import {SelectedVersions, VersionService} from "../version.service";
import {filter, map, switchMap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: "app-change-list",
  templateUrl: "./change-list.component.html",
  styleUrls: ["./change-list.component.sass"],
  host: { style: "display: block"}
})
export class ChangeListComponent implements OnInit {
  private versionRange$: Observable<string[]>;

  constructor(readonly versionService: VersionService) {
  }

  ngOnInit() {
    this.versionRange$ = this.versionService.selectedVersions$
      .pipe(
        filter(v => !!v.fv && !!v.tv),
        switchMap(v => this.getVersionsBetween(v))
      );
  }

  public getChangesFor(version: string) {
    return this.versionService.getChangesFor(version);
  }

  private getVersionsBetween(s: SelectedVersions): Observable<string[]> {
    return this.versionService.versions$.pipe(
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
