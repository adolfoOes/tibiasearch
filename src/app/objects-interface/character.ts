import { CharacterData } from './character-data';
import { CharacterDeath } from './character-death';
import { CharacterAccountInfo } from './character-acc-info';

export interface Character {
  account: CharacterAccountInfo;
  data: CharacterData;
  achievements: Array<string>;
  deaths : Array<CharacterDeath>
}
