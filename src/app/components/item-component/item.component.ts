import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ItemService} from '../../services/items-service';
import {Item} from '../../models/item.model';

@Component({
    selector: 'item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent {
    @Input() item: Item;
	@Input() selectedId;
    @Output() select: EventEmitter<any> = new EventEmitter();
    @Output() delete: EventEmitter<any> = new EventEmitter();
	
	isActive=this.showActive();
	
	showActive(){
		if(this.item!=undefined&&this.selectedId==this.item.id)
			return true;
		else return false;
	}
	
	onDelete(item: Item) {
			this.delete.emit(item);
		}
		
    onSelect(item: Item) {
        this.select.emit(item);
		if(this.selectedId==this.item.id)
			this.isActive= true;
		else this.isActive= false;
    }
}
