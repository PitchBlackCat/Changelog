import {EventEmitter, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs';

export abstract class Destroyable implements OnDestroy {
  private _destroy$: EventEmitter<void> = new EventEmitter<void>();
  readonly destroy$: Observable<void> = this._destroy$.asObservable();

  ngOnDestroy(): void {
    this._destroy$.emit();
  }
}
