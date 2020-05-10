import { CharacterInfo } from './character-info';

export interface CharacterDeath {
date : Date,
reason : string,
involved : Array<CharacterInfo>
}
