import { DataSource } from '@angular/cdk/collections';
import { Observable, of as observableOf, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from 'src/app/objects-interface/character';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';

export interface PlayerDeath {
  level: number;
  reason: string;
  involved: Array<any>;
  date: any;
}

const ELEMENT_DATA: PlayerDeath[] = [
];

export class PlayerDeathsDataSource extends DataSource<PlayerDeath>{

  dataOrigem: PlayerDeath[] = ELEMENT_DATA;
  data: PlayerDeath[] = ELEMENT_DATA;
  response: any;


  constructor() {
    super();
  }


  connect(): Observable<PlayerDeath[]> {

    const dataMutations = [
      observableOf(this.data),
      // this.paginator.page,
      // this.sort.sortChange
    ];

    // this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      // return this.getPagedData(this.getSortedData([...this.data]));
      // return this.getSortedData([...this.data])
      return [...this.data];
    }));
  }

  disconnect() { }


  private getPagedData(data: PlayerDeath[]) {
    // const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    // return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: PlayerDeath[]) {

    // if (!this.sort.active || this.sort.direction === '') {
    //   return data;
    // }

    // return data.sort((a, b) => {
    //   const isAsc = this.sort.direction === 'asc';

    //   switch (this.sort.active) {
    //     // case 'nome': return compare(a.nome, b.nome, isAsc);
    //     // case 'codPostoOperacao': return compare(a.codPostoOperacao, b.codPostoOperacao, isAsc);
    //     // case 'idStatus': return compare(a.idStatus, b.idStatus, isAsc);
    //     // case 'centroTrabalho': return compare(a.centroTrabalho, b.centroTrabalho, isAsc);
    //     // case 'dataModificacao': return compare(+a.dataModificacao, +b.dataModificacao, isAsc);
    //     // case 'listaIdOrganizacao': return compare(a.idOrganizacao, b.idOrganizacao, isAsc);
    //     default: return 0;
    //   }
    // });
  }

}

function compare(a: number | string | string[], b: number | string |  string[], isAsc:boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
