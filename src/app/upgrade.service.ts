import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class UpgradeService {

  readonly name$: Observable<string>;
  readonly json$: Observable<VersionJson>;
  readonly instructionsPerVersion$: Observable<Instructions>;
  readonly versions$: Observable<string[]>;
  readonly selectedVersions$: EventEmitter<SelectedVersions> = new EventEmitter<SelectedVersions>();

  constructor(readonly http: HttpClient) {
    this.json$ = this.http.get<VersionJson>('assets/instructions.json').pipe(shareReplay(1));
    this.name$ = this.json$.pipe(map(json => json.name));
    this.instructionsPerVersion$ = this.json$.pipe(map(json => json.versions));
    this.versions$ = this.instructionsPerVersion$.pipe(map(v => Object.keys(v).sort()));
  }

  setSelected(selected: SelectedVersions) {
    this.selectedVersions$.emit(selected);
  }

  getInstructionsFor(version: string): Observable<Instruction[]> {
    return this.instructionsPerVersion$.pipe(
      map(v => v[version].instructions)
    );
  }
}

export interface SelectedVersions {
  fv: string;
  tv: string;
}

export interface Instruction {
  type: string;
  title?: string;
  description: string;
}

export interface VersionJson {
  name: string;
  versions: Instructions;
}

export interface Instructions {
  [version: string]: {
    instructions: Instruction[];
  };
}
