import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserformComponent } from './Components/userform/userform.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import{MatSortModule} from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,MatSortModule,
    AppRoutingModule,MatPaginatorModule,
     MatIconModule, MatButtonModule,MatRadioModule,MatSelectModule,
     MatToolbarModule,HttpClientModule, MatInputModule,
     ReactiveFormsModule,MatDialogModule,MatFormFieldModule,
     MatTableModule,MatDatepickerModule,MatCheckboxModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
