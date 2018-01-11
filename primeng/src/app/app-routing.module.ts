import { MenusComponent } from './components/menus/menus.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverlayComponent } from "./components/overlay/overlay.component";
import { PanelsComponent } from './components/panels/panels.component';

const routes: Routes = [
  {
    path: 'panels', 
    component: PanelsComponent, 
    children:[ 
      { path: '', loadChildren: './modules/panels.module#PanelsModule'}
    ]
  },{
    path: 'overlay', 
    component: OverlayComponent, 
    children:[ 
      { path: '', loadChildren: './modules/overlay.module#OverlayModule'}
    ]
  },{
    path: 'menus', 
    component: MenusComponent, 
    children:[ 
      { path: '', loadChildren: './modules/menus.module#MenusModule'}
    ]
  },{
    path: '',
    redirectTo: 'panels',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
