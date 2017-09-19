import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/* Material Design */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdIconModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdSliderModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdSnackBarModule} from '@angular/material';
import {MdTooltipModule} from '@angular/material';

/* Modules */
import { AppRoutingModule } from "./modules/app-routing.module";

/* Services */
import { UserService } from './services/user.service';
import { PatternService } from './services/pattern.service';

/* Components */
import { RootComponent } from './routes/root/root.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { TestComponent } from './routes/test/test.component';

import { VertcialSliderComponent } from './components/vertcial-slider/vertcial-slider.component';
import { PatternComponent } from './components/pattern/pattern.component';
import { FramesComponent } from './components/frames/frames.component';
import { InfoSnackbarComponent } from './components/snackbars/info-snackbar/info-snackbar.component';
import { ActionSnackbarComponent } from './components/snackbars/action-snackbar/action-snackbar.component';
import { WarningSnackbarComponent } from './components/snackbars/warning-snackbar/warning-snackbar.component';
import { ErrorSnackbarComponent } from './components/snackbars/error-snackbar/error-snackbar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    VertcialSliderComponent,
    TestComponent,
    RootComponent,
    NotFoundComponent,
    PatternComponent,
    InfoSnackbarComponent,
    ActionSnackbarComponent,
    WarningSnackbarComponent,
    ErrorSnackbarComponent,
    FramesComponent
  ],
  entryComponents: [
    InfoSnackbarComponent,
    ActionSnackbarComponent,
    WarningSnackbarComponent,
    ErrorSnackbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MdIconModule,
    MdTabsModule,
    MdMenuModule,
    MdButtonModule,
    MdSliderModule,
    MdGridListModule,
    MdSnackBarModule,
    MdTooltipModule
  ],
  providers: [
    UserService,
    PatternService
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
