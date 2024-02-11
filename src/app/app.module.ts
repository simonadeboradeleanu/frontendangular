import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharkComponent } from './shark/shark.component';
import { ShowSharkComponent } from './shark/show-shark/show-shark.component';
import { AddEditSharkComponent } from './shark/add-edit-shark/add-edit-shark.component';
import { SharkApiService } from './shark-api.service';
import { ShowSharkOceanComponent } from './shark/show-shark-ocean/show-shark-ocean.component';
import { ShowOceanComponent } from './ocean/show-ocean/show-ocean.component';
import { OceanComponent } from './ocean/ocean.component';
import { UnuComponent } from './ocean/unu/unu.component';
import { DoiComponent } from './ocean/doi/doi.component';
import { TreiComponent } from './ocean/trei/trei.component';
import { PatruComponent } from './ocean/patru/patru.component';
import { CinciComponent } from './ocean/cinci/cinci.component';
import { NgZone } from '@angular/core'; 
import { UserComponent } from './user/user.component';
import { UserApiServiceService } from './user-api.service.service';
import { DetaliiComponent } from './detalii/detalii.component';
import { DetaliiServiceService } from './detalii-service.service';
import { AddsharkComponent } from './addshark/addshark.component';

const routes: Routes = [
  { path: 'app-unu', component: UnuComponent },
  { path: 'app-doi', component: DoiComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SharkComponent,
    ShowSharkComponent,
    AddEditSharkComponent,
    ShowSharkOceanComponent,
    ShowOceanComponent,
    OceanComponent,
    UnuComponent,
    DoiComponent,
    TreiComponent,
    PatruComponent,
    CinciComponent,
    UserComponent,
    DetaliiComponent,
    AddsharkComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [SharkApiService, UserApiServiceService, DetaliiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
