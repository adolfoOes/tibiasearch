import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {Component} from '@angular/core';
import { Character } from 'src/app/objects-interface/character';

export interface PlayerDeath {
  level: number;
  reason: string;
  involved: Array<Character>;
  date : string;
}

const ELEMENT_DATA: PlayerDeath[] = [
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'player-death-datasource',
  template : ''
})

export class PlayerDeathsDataSource implements  DataSource<PlayerDeath>{

  private data = new BehaviorSubject<PlayerDeath[]>([]);
  dataSource = ELEMENT_DATA;

  connect(): Observable<PlayerDeath[]> {
    return this.data.asObservable();
  }

  disconnect() {}

}
