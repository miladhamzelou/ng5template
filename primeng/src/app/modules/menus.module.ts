import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MenuModule,
  ContextMenuModule,
  PanelMenuModule,
  StepsModule,
  TieredMenuModule
} from 'primeng/primeng';

import { MenuModelComponent } from '../components/menus/menu-model/menu-model.component';
import { MenuContextComponent } from '../components/menus/menu-context/menu-context.component';
import { MenuComponent } from '../components/menus/menu/menu.component';
import { PanelModelComponent } from '../components/menus/panel-model/panel-model.component';
import { StepsComponent } from '../components/menus/steps/steps.component';
import { TrippedComponent } from '../components/menus/tripped/tripped.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'menu-model', pathMatch: 'full'
  },{
    path: 'menu-model', component: MenuModelComponent
  },{
    path: 'menu-context', component: MenuContextComponent
  },{
    path: 'menu', component: MenuComponent
  },{
    path: 'panel-model', component: PanelModelComponent
  },{
    path: 'steps', component: StepsComponent
  },{
    path: 'tripped', component: TrippedComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    ContextMenuModule,
    PanelMenuModule,
    StepsModule,
    TieredMenuModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuModelComponent, MenuContextComponent, MenuComponent, PanelModelComponent, StepsComponent, TrippedComponent]
})
export class MenusModule { }
