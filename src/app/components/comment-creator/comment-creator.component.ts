import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({selector: 'comment-creator',
    templateUrl: './comment-creator.component.html',
    styleUrls: ['./comment-creator.component.css']
})
export class CommentCreatorComponent {
    comment: string;
	@Output() add: EventEmitter<any> = new EventEmitter();
	
    createComment(comment: string) {
		this.add.emit(comment);
		this.comment=null;
    }
}
