import {Coment} from './models/coment.model';
import {Component} from '@angular/core';
import {ItemService} from './services/items-service';
import {Item} from './models/item.model';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
    items = [];
    selectedItem : Item;
	selectedId:number;
    constructor(private itemService : ItemService) {
        this.items = this
            .itemService
            .getItems();
    }

    onCreateItem(item : string) {
        this.selectedItem = new Item(new Date().getTime(), item, []);
        this.itemService.addItem(this.selectedItem);
        this.items = this.itemService.getItems();
		this.selectedId= this.selectedItem.id;
    }

    onSelectItem(item : Item) {
        this.selectedItem = item;
		this.selectedId= item.id;
    }

    onDeleteItem(item : Item) {
        this
            .itemService
            .removeItem(item);
        this.items = this
            .itemService
            .getItems();
        if (this.selectedItem && this.selectedItem.id == item.id) {
            this.selectedItem = null;
        }
    }
	
    onAddComent(text: string) {
        this.itemService .createItemComment(this.selectedItem.id, new Coment(new Date().getTime(), text, this.randomColor()));
        this.items = this.itemService.getItems();
        this.selectedItem = this.items.filter(item => item.id === this.selectedItem.id)[0];
    }
	
	
	randomColor(){ 
		if( (Math.floor	(Math.random() * 10) + 1 )%2==0 )
			return "#FF8A00";
		else return "#47568C";
	}
}
