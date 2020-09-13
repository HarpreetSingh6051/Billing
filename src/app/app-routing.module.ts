import { BaseLayerComponentModule } from './components/base-layer-component/base-layer-component.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  loadChildren: './components/base-layer-component/base-layer-component.module#BaseLayerComponentModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BaseLayerComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
