import { Routes, RouterModule  } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  AccordionModule,
  PanelModule,
  TabViewModule,
  FieldsetModule,
  ToolbarModule,
  SplitButtonModule
} from 'primeng/primeng';

import { GridComponent } from './../components/panels/grid/grid.component';
import { FieldSetComponent } from './../components/panels/field-set/field-set.component';
import { TableViewComponent } from './../components/panels/table-view/table-view.component';
import { PanelComponent } from './../components/panels/panel/panel.component';
import { AccordianComponent } from '../components/panels/accordian/accordian.component';
import { ToolbarComponent } from './../components/panels/toolbar/toolbar.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'accordian', pathMatch: 'full'
  },
  {
    path: 'accordian', component: AccordianComponent
  },{
    path: 'panel', component: PanelComponent
  },{
    path: 'table-view', component: TableViewComponent
  },{
    path: 'field-set', component: FieldSetComponent
  },{
    path: 'grid', component: GridComponent
  },{
    path: 'toolbar', component: ToolbarComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    PanelModule,
    TabViewModule,
    FieldsetModule,
    ToolbarModule,
    SplitButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AccordianComponent,
    PanelComponent,
    TableViewComponent,
    FieldSetComponent,
    GridComponent,
    ToolbarComponent
  ]
})
export class PanelsModule { }
