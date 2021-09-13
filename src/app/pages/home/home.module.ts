import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from "@angular/router";
import {PublicationService} from "../shared/services/publication.service";
import {SharedMaterialModule} from "../../shared/shared-material.module";
import {MessageSenderComponent} from "./components/message-sender/message-sender.component";
import {PostComponent} from "./components/post/post.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {StoryComponent} from "./components/story/story.component";

const routes: Routes = [
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    MessageSenderComponent,
    PostComponent,
    SidebarComponent,
    StoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule
  ],
  providers: [
    PublicationService
  ]
})

export class HomeModule {
}
