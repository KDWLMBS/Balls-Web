import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/* Material Design */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdSliderModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';
import {MdSnackBarModule} from '@angular/material';
import {MdTooltipModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material';

/* Modules */
import { AppRoutingModule } from './modules/app-routing.module';

/* Services */
import { UserService } from './services/user.service';
import { PatternService } from './services/pattern.service';
import { WebsocketService } from './services/websocket.service';

/* Routes */
import { RootComponent } from './routes/root/root.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { PatternComponent } from './routes/pattern/pattern.component';
import { TestComponent } from './routes/test/test.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';

/* Elements */
import { VerticalSliderComponent } from './components/vertical-slider/vertical-slider.component';
import { FramesComponent } from './components/frames/frames.component';
import { FrameComponent } from './components/frame/frame.component';
import { FramesPreviewComponent } from './components/frames-preview/frames-preview.component';

/* SnackBars */
import { InfoSnackbarComponent } from './components/snackbars/info-snackbar/info-snackbar.component';
import { ActionSnackbarComponent } from './components/snackbars/action-snackbar/action-snackbar.component';
import { WarningSnackbarComponent } from './components/snackbars/warning-snackbar/warning-snackbar.component';
import { ErrorSnackbarComponent } from './components/snackbars/error-snackbar/error-snackbar.component';

/* Dialogs */
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    DashboardComponent,
    VerticalSliderComponent,
    TestComponent,
    RootComponent,
    NotFoundComponent,
    PatternComponent,
    InfoSnackbarComponent,
    ActionSnackbarComponent,
    WarningSnackbarComponent,
    ErrorSnackbarComponent,
    ConfirmDialogComponent,
    FramesComponent,
    FrameComponent,
    FramesPreviewComponent
  ],
  entryComponents: [
    InfoSnackbarComponent,
    ActionSnackbarComponent,
    WarningSnackbarComponent,
    ErrorSnackbarComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MdIconModule,
    MdTabsModule,
    MdMenuModule,
    MdButtonModule,
    MdSliderModule,
    MdGridListModule,
    MdSnackBarModule,
    MdTooltipModule,
    MdDialogModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  providers: [
    UserService,
    PatternService,
    WebsocketService
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
