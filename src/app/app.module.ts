import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ItemService} from './services/items-service';
import {ItemComponent} from './components/item-component/item.component';
import {ItemsComponent} from './components/items-component/items.component';
import {ItemCreatorComponent} from './components/item-creator/itemCreator.component';
import {CommentComponent} from './components/comment-component/comment.component';
import {CommentsComponent} from './components/comments-component/comments.component';
import {CommentCreatorComponent} from './components/comment-creator/comment-creator.component';
import {Item} from './models/item.model';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemsComponent,
    ItemCreatorComponent,
	CommentComponent,
	CommentsComponent,
	CommentCreatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
