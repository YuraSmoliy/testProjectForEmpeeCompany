import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Coment} from '../../models/coment.model';
 
@Component({
    selector: 'comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
	@Input() comments: Comment[];
	@Input() commentsId:number;
	@Output() add: EventEmitter<any> = new EventEmitter();
	
	createComment(comment:string){
		this.add.emit(comment);
	}
}
