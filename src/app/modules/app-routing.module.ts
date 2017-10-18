import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RootComponent } from '../routes/root/root.component';
import { DashboardComponent } from '../routes/dashboard/dashboard.component';
import { TestComponent } from '../routes/test/test.component';
import { PatternComponent } from '../routes/pattern/pattern.component';
import { PatternIdComponent } from '../routes/pattern-id/pattern-id.component';
import { NotFoundComponent } from '../routes/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'test', component: TestComponent },
  { path: 'pattern', component: PatternComponent },
  { path: 'pattern/:id', component: PatternIdComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
