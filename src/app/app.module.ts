import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ScheduleMessageComponent } from './schedule-message/schedule-message.component';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleStatusComponent } from './schedule-status/schedule-status.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCommonModule} from '@angular/material/core';
import { SchedulexService } from './schedulex.service';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';




const appRoutes: Routes = [
  { path: '', component: ScheduleMessageComponent },
  { path: 'message', component: ScheduleMessageComponent },
  { path: 'status', component: ScheduleStatusComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ScheduleMessageComponent,
    ScheduleStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCommonModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MatSelectModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
