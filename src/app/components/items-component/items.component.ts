import {Component,Output,Input,EventEmitter} from '@angular/core';
import {ItemService} from '../../services/items-service';
import {ItemComponent} from '../item-component/item.component';
import {Item} from '../../models/item.model';

@Component({
    selector: 'items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent {
    @Input() items: Item[];
	@Input() selectedItemId;
	@Output() select: EventEmitter<any> = new EventEmitter();
	@Output() delete: EventEmitter<any> = new EventEmitter();
	@Output() create: EventEmitter<any> = new EventEmitter();
	
    onItemSelect(item) {
        this.select.emit(item);
    }

    onItemDelete(item) {
        this.delete.emit(item);
    }
	
	onCreateItem(item){
		this.create.emit(item);
	}
}
