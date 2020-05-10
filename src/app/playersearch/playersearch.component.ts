import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Characters } from '../objects-interface/Characters';

@Component({
  selector: 'tsa-playersearch',
  templateUrl: './playersearch.component.html',
  styleUrls: ['./playersearch.component.css']
})

export class PlayersearchComponent implements OnInit {

  constructor(private http: HttpClient) {}

  API = 'https://api.tibiadata.com/v2/';

  characterDataLoaded = false ;
  playername = '' ;
  playerlevel = null ;

  ngOnInit(): void {

    console.log('teste');

  }

  requestPlayerInfo(playername) {

    this.http.get<Characters>(this.API + 'characters/' + playername + '.json')
      .subscribe(response => {

        console.log(response.characters.data);

        this.playername = response.characters.data.name;
        this.playerlevel = response.characters.data.level;

      },
        error => console.log("Error: " + error)
      )
  }


}
