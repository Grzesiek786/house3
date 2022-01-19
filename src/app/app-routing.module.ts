import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesCardComponent } from './components/houses-card/houses-card.component';

const routes: Routes = [
  { path: 'houses', component: HousesCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
