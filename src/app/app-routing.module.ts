import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnuComponent } from './ocean/unu/unu.component';
import { DoiComponent } from './ocean/doi/doi.component';
import { TreiComponent } from './ocean/trei/trei.component';
import { PatruComponent } from './ocean/patru/patru.component';
import { CinciComponent } from './ocean/cinci/cinci.component';
import { AppComponent } from './app.component';
import { SharkComponent } from './shark/shark.component';
import { ShowSharkComponent } from './shark/show-shark/show-shark.component';
import { ShowOceanComponent } from './ocean/show-ocean/show-ocean.component';
import { DetaliiComponent } from './detalii/detalii.component';
import { AddsharkComponent } from './addshark/addshark.component';

const routes: Routes = [
  { path: 'unu', component: UnuComponent },
  { path: 'doi', component: DoiComponent },
  { path: 'trei', component: TreiComponent },
  { path: 'patru', component: PatruComponent },
  { path: 'cinci', component: CinciComponent },
  { path: 'shark', component: SharkComponent },
  { path: 'show-shark', component: ShowSharkComponent, pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  {path: 'show-ocean', component: ShowOceanComponent, pathMatch: 'full'},
  {path: 'show-shark/:id', component: DetaliiComponent, pathMatch: 'full'},
  {path: 'addshark', component: AddsharkComponent, pathMatch: 'full'}

  //{ path: '', redirectTo: '/app', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
