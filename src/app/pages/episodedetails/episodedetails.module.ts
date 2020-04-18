import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodedetailsPageRoutingModule } from './episodedetails-routing.module';

import { EpisodedetailsPage } from './episodedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodedetailsPageRoutingModule
  ],
  declarations: [EpisodedetailsPage]
})
export class EpisodedetailsPageModule {}
