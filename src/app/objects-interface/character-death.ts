import { CharacterInfo } from './character-info';

export interface CharacterDeath {
date : Date,
level : number,
reason : string,
involved : Array<CharacterInfo>
}
