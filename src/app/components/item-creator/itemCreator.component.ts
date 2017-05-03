import {Component,EventEmitter,Output} from '@angular/core';


@Component({selector: 'item-creator',
    templateUrl: './itemCreator.component.html',
    styleUrls: ['./itemCreator.component.css']
})
export class ItemCreatorComponent {
    item: string;

	@Output() create: EventEmitter<any> = new EventEmitter();

    createItem(item: string) {
        this.create.emit(item);
		this.item=null;
    }
	
}
