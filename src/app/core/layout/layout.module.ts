import {NgModule} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {MessageSenderComponent} from "./message-sender/message-sender.component";
import {PostComponent} from "./post/post.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {StoryComponent} from "./story/story.component";
import {SharedMaterialModule} from "../../shared/shared-material.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    MessageSenderComponent,
    PostComponent,
    SidebarComponent,
    StoryComponent
  ],
  exports: [
    HeaderComponent,
    MessageSenderComponent,
    PostComponent,
    SidebarComponent,
    StoryComponent
  ],
  imports: [
    RouterModule,
    SharedMaterialModule
  ]
})

export class LayoutModule {
}
