import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Characters } from '../objects-interface/Characters';
import { Character } from '../objects-interface/Character';
import { PlayerDeathsDataSource } from './datasource/playersearchdeaths.datasource';

@Component({
  selector: 'tsa-playersearch',
  templateUrl: './playersearch.component.html',
  styleUrls: ['./playersearch.component.css']
})



export class PlayersearchComponent implements OnInit {


  constructor(private http: HttpClient) {}

  API = 'https://api.tibiadata.com/v2/';

  characterDataLoaded = false ;

  playername = null;
  playerstatus = null ;
  playerlevel = null ;
  playeraccountstatus = null ;
  playervocation = null ;
  playerworld = null ;
  playerresidence = null ;
  playerachievements = null ;
  playerguild = null ;
  playerguildrank = null ;
  dataSource = PlayerDeathsDataSource;


  ngOnInit(): void {

    console.log('teste');

  }

  requestPlayerInfo(playername) {

    this.http.get<Characters>(this.API + 'characters/' + playername + '.json')
      .subscribe(response => {

        // console.log(response.characters);

        this.playername = response.characters.data.name;
        this.playerlevel = response.characters.data.level;
        this.playerstatus = response.characters.data.status;
        this.playervocation = response.characters.data.vocation;
        this.playerworld = response.characters.data.world;
        this.playerresidence = response.characters.data.residence;
        this.playerachievements = response.characters.data.achievement_points;
        this.playeraccountstatus = response.characters.data.account_status;
        this.playerguild = response.characters.data.guild.name;
        this.playerguildrank = response.characters.data.guild.rank;

        response.characters.deaths.forEach(death => {

          // console.log(death);

          var newDeath = {
            // level : death.level,
            involved : death.involved,
            reason : death.reason,
            date : death.date
          }


          console.log(this.dataSource);

          // this.dataSource.dataSource.push(newDeath)

        });

        //

      },
        error => console.log("Error: " + error)
      )
  }


}
