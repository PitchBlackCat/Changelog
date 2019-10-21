import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfInstructionsComponent } from './list-of-instructions.component';

describe('ChangeListComponent', () => {
  let component: ListOfInstructionsComponent;
  let fixture: ComponentFixture<ListOfInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
