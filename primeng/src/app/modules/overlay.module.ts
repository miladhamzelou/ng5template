import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule  } from '@angular/router';

import { 
  ConfirmDialogModule,
  ConfirmationService,
  LightboxModule,
  OverlayPanelModule,
  SidebarModule,
  DialogModule,
  TooltipModule
} from 'primeng/primeng';

import { ConfirmDialogComponent } from './../components/overlay/confirm-dialog/confirm-dialog.component';
import { LightboxComponent } from './../components/overlay/lightbox/lightbox.component';
import { OverlayPanelComponent } from './../components/overlay/overlay-panel/overlay-panel.component';
import { SidebarComponent } from './../components/overlay/sidebar/sidebar.component';
import { DialogComponent } from './../components/overlay/dialog/dialog.component';
import { TooltipComponent } from './../components/overlay/tooltip/tooltip.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'confirm', pathMatch: 'full'
  },{
    path: 'confirm', component: ConfirmDialogComponent
  },{
    path: 'lightbox', component: LightboxComponent
  },{
    path: 'overlay-panel', component: OverlayPanelComponent
  },{
    path: 'sidebar', component: SidebarComponent
  },{
    path: 'dialog', component: DialogComponent
  },{
    path: 'tooltip', component: TooltipComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    ConfirmDialogModule,
    LightboxModule,
    OverlayPanelModule,
    SidebarModule,
    DialogModule,
    TooltipModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ ConfirmDialogComponent, LightboxComponent, OverlayPanelComponent, SidebarComponent, DialogComponent, TooltipComponent ],
  providers: [ ConfirmationService ]
})
export class OverlayModule { }
