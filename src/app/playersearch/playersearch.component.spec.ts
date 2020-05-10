import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersearchComponent } from './playersearch.component';

describe('PlayersearchComponent', () => {
  let component: PlayersearchComponent;
  let fixture: ComponentFixture<PlayersearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
