import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Characters } from '../objects-interface/Characters';
import { PlayerDeathsDataSource } from './datasource/playersearchdeaths.datasource';


@Component({
  selector: 'tsa-playersearch',
  templateUrl: './playersearch.component.html',
  styleUrls: ['./playersearch.component.css']
})



export class PlayersearchComponent implements OnInit {


  constructor(private http: HttpClient) {}


  @ViewChild('playersearch') playersearch: any;
  API = 'https://api.tibiadata.com/v2/';

  characterDataLoaded = false ;

  player : any = [];
  collunsGrid = 2;
  labelFX = 35;
  displayFX = 65;

  collunsGridOther = 3;
  // involvedHidden = false;

  dataSource = new PlayerDeathsDataSource();


  ngOnInit(): void {

    this.dataSource = new PlayerDeathsDataSource();

    if (window.innerWidth <= 700) {
      this.collunsGrid = 1;
    }

  }

  requestPlayerInfo(playername) {

    // console.log(playername);


    this.http.get<Characters>(this.API + 'characters/' + playername + '.json')
      .subscribe(response => {

        this.player.name = response.characters.data.name;
        this.player.level = response.characters.data.level;
        this.player.status = response.characters.data.status;
        this.player.vocation = response.characters.data.vocation;
        this.player.world = response.characters.data.world;
        this.player.residence = response.characters.data.residence;
        this.player.achievements = response.characters.data.achievement_points;
        this.player.accountstatus = response.characters.data.account_status;
        this.player.guild = response.characters.data.guild.name;
        this.player.guildrank = response.characters.data.guild.rank;

        this.player.deaths = response.characters.deaths;
        this.player.other_characters = response.characters.other_characters;

        // console.log(response);
        // console.log(this.player);

      },
        error => console.log("Error: " + error)
      )
  }


  requestPlayerInPage(playername){

    this.playersearch.value = playername;
    this.playersearch.nativeElement.value = playername;

    this. requestPlayerInfo(playername)

  }


}
