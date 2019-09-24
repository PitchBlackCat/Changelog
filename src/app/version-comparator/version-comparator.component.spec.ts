import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionComparatorComponent } from './version-comparator.component';

describe('VersionComparatorComponent', () => {
  let component: VersionComparatorComponent;
  let fixture: ComponentFixture<VersionComparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionComparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
