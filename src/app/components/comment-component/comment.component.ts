import { Component, Input } from '@angular/core';
import {Coment} from '../../models/coment.model';
 
@Component({
    selector: 'comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css']
})
export class CommentComponent {	
	@Input() comment: Comment;
}
		
    