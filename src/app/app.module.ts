import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import {MatExpansionModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';

/* Modules */
import { AppRoutingModule } from './modules/app-routing.module';

/* Services */
import { UserService } from './services/user.service';
import { PatternService } from './services/pattern.service';
import { FormulaService } from './services/formula.service';
import { WebsocketService } from './services/websocket.service';

/* Routes */
import { RootComponent } from './routes/root/root.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { PatternComponent } from './routes/pattern/pattern.component';
import { PatternIdComponent } from './routes/pattern-id/pattern-id.component';
import { PatternSingleComponent } from './routes/pattern-single/pattern-single.component';
import { PatternMultipleComponent } from './routes/pattern-multiple/pattern-multiple.component';
import { FormulaComponent } from './routes/formula/formula.component';
import { FormulaIdComponent } from './routes/formula-id/formula-id.component';
import { TestComponent } from './routes/test/test.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';

/* Elements */
import { VerticalSliderComponent } from './components/vertical-slider/vertical-slider.component';
import { VerticalSlidersComponent } from './components/vertical-sliders/vertical-sliders.component';
import { FramesComponent } from './components/frames/frames.component';
import { FrameComponent } from './components/frame/frame.component';
import { FramesPreviewComponent } from './components/frames-preview/frames-preview.component';
import { ChartComponent } from './components/chart/chart.component';

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
    TestComponent,
    RootComponent,
    NotFoundComponent,
    PatternComponent,
    PatternIdComponent,
    PatternSingleComponent,
    PatternMultipleComponent,
    FormulaComponent,
    FormulaIdComponent,
    VerticalSliderComponent,
    InfoSnackbarComponent,
    ActionSnackbarComponent,
    WarningSnackbarComponent,
    ErrorSnackbarComponent,
    ConfirmDialogComponent,
    FramesComponent,
    FrameComponent,
    FramesPreviewComponent,
    ChartComponent,
    VerticalSlidersComponent
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
    MatSlideToggleModule,
    MatExpansionModule,
    MatSelectModule
  ],
  providers: [
    UserService,
    PatternService,
    FormulaService,
    WebsocketService
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
