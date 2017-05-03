import {Coment} from './coment.model';

export class Item {
    constructor(public id : number, public name : string, public coments : Coment[]) {}
}
