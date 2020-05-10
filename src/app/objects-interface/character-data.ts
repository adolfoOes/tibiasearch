import { CharacterGuild } from './character-guild';

export interface CharacterData {
account_status: string
achievement_points: number
last_login: Array<Date>[]
level: number
name: string
residence: string
sex: string
status: string
title: string
vocation: string
world: string
guild : CharacterGuild
}
