import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpisodedetailsPage } from './episodedetails.page';

const routes: Routes = [
  {
    path: '',
    component: EpisodedetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodedetailsPageRoutingModule {}
