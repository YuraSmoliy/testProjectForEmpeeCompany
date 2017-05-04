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
	@Input() isActive = false;
    @Output() select: EventEmitter<any> = new EventEmitter();
    @Output() delete: EventEmitter<any> = new EventEmitter();
		
	onDelete(item: Item) {
		this.delete.emit(item);
	}
		
    onSelect(item: Item) {
        this.select.emit(item);
    }
}
