import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimateHomeComponent } from './modules/climate/page/climate-home/climate-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'climate',
    pathMatch: 'full',
  },
  {
    path: 'climate',
    component: ClimateHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
