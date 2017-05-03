import {Item} from '../models/item.model';
import {Coment} from '../models/coment.model';

export class ItemService {
	lokalData =JSON.parse(localStorage.getItem("object"))||[];
    items: Item[] = [];

    addItem(item: Item) {
        this.items.push(item);
		this.lokalData.push(String(item.id));
		localStorage.setItem("object",JSON.stringify(this.lokalData))
		localStorage.setItem(String(item.id), JSON.stringify(item));
    }

    getItems() {
		if(this.getData()) {
			this.items=this.getData();
		}
		this.getData();
        return this.items;
    }

    removeItem(item: Item) {
        this.items.splice(this.items.indexOf(item), 1);
		localStorage.removeItem(String(item.id));
		this.lokalData.splice(this.lokalData.indexOf(String(item.id)),1);
		localStorage.setItem("object",JSON.stringify(this.lokalData))
    }

    createItemComment(itemId: number, comment: Coment) {
		this.items.forEach(item => {
			if(item.id===itemId){
				item.coments.push(comment);		
				localStorage.setItem(String(itemId), JSON.stringify(item));
			}
		})        
    }
	
	getData(){
		let getLocaleData: Item[] = [];
		for(let i=0;i<this.lokalData.length;i++){	
			getLocaleData.push(JSON.parse(localStorage.getItem(this.lokalData[i])));
		};	
		return getLocaleData;
	}
}