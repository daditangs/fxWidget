import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FxService } from 'src/app/services/fx.service';
import { FxwidgetComponent } from './fxwidget.component';

@NgModule({
  declarations: [
    FxwidgetComponent,
  ],
  exports: [
    FxwidgetComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  providers: [
    FxService,
  ]
})
export class FxwidgetModule { }
