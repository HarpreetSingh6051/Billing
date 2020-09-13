import { SharedModule } from './../../shared/shared.module';
import { BaseLayerComponent } from './base-layer/base-layer.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [{
  path: '',
  component: BaseLayerComponent
}];
@NgModule({
  declarations: [
    BaseLayerComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)],
})
export class BaseLayerComponentModule { }
