import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyRepliesPage } from './my-replies';

@NgModule({
  declarations: [
    MyRepliesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyRepliesPage),
  ],
})
export class MyRepliesPageModule {}
