import {Item} from '../models/item.model';
import {Coment} from '../models/coment.model';

let ITEMS_ID = "itemsID";

export class ItemService {
	localData = JSON.parse(localStorage.getItem(ITEMS_ID))||[];
    items: Item[] = [];

    addItem(item: Item) {
        this.items.push(item);
		this.localData.push(String(item.id));
		this.updateItemsId();
		this.updateItem(item);
    }

    getItems() {
		if(this.getData()) {
			this.items = this.getData();
		}
		
		this.getData();
        return this.items;
    }

    removeItem(item: Item) {
        this.items.splice(this.items.indexOf(item), 1);
		localStorage.removeItem(String(item.id));
		this.localData.splice(this.localData.indexOf(String(item.id)), 1);
		this.updateItemsId();
    }

    createItemComment(itemId: number, comment: Coment) {
		this.items.forEach(item => {
			if(item.id === itemId){
				item.coments.push(comment);		
				this.updateItem(item);
			}
		})        
    }
	
	getData(){
		let getLocalData: Item[] = [];
		for (let i = 0; i < this.localData.length; i++) {	
			getLocalData.push(JSON.parse(localStorage.getItem(this.localData[i])));
		};
		
		return getLocalData;
	}
	
	updateItemsId(){
		localStorage.setItem(ITEMS_ID,JSON.stringify(this.localData));
	}
	
	updateItem(item){
		localStorage.setItem(String(item.id), JSON.stringify(item));
	}
}