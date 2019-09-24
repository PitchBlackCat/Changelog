import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, pluck, shareReplay} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  public name$: Observable<string>;
  public json$: Observable<VersionJson>;
  public changelog$: Observable<Changelog>;
  public versions$: Observable<string[]>;
  public selectedVersions$: EventEmitter<SelectedVersions> = new EventEmitter<SelectedVersions>();

  constructor(readonly http: HttpClient) {
    this.json$ = this.http.get<VersionJson>('assets/versions.json').pipe(shareReplay(0));
    this.name$ = this.json$.pipe(map(json => json.name));
    this.changelog$ = this.json$.pipe(map(json => json.changelog));
    this.versions$ = this.changelog$.pipe(map(v => Object.keys(v).sort()));
  }

  setSelected(selected: SelectedVersions) {
    this.selectedVersions$.emit(selected);
  }

  getChangesFor(version: string): Observable<Change[]> {
    return this.changelog$.pipe(
      map(v => v[version].changes)
    );
  }
}

export interface SelectedVersions {
  fv: string;
  tv: string;
}

export interface Change {
  type: string;
  description: string;
}

export interface VersionJson {
  name: string;
  changelog: Changelog;
}

export interface Changelog {
  [version: string]: {
    changes: Change[];
  };
}
