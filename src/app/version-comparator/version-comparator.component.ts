import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {ChangelogService} from '../changelog.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {first, takeUntil} from 'rxjs/internal/operators';

@Component({
  selector: 'app-version-comparator',
  templateUrl: './version-comparator.component.html',
  styleUrls: ['./version-comparator.component.sass'],
  host: { style: 'display: block'}
})
export class VersionComparatorComponent implements OnInit, OnDestroy {
  public versions$: Observable<any>;
  readonly destroy$: EventEmitter<void> = new EventEmitter<void>();
  private form: FormGroup;

  constructor(readonly changelogService: ChangelogService,
              readonly fb: FormBuilder) {
  }

  ngOnDestroy(): void {
    this.destroy$.emit();
  }

  ngOnInit() {
    this.versions$ = this.changelogService.versions$;
    this.form = this.fb.group({
      fv: [],
      tv: []
    });

    this.versions$.pipe(
      first()
    ).subscribe(v => {
      this.form.patchValue({
        fv: v[v.length - 2],
        tv: v[v.length - 1]
      });
    });

    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.changelogService.setSelected(this.form.getRawValue());
      });
  }
}
