import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { TabsPage } from './tabs.page';
 
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'characters',
        children: [
          {
            path: '',
            loadChildren: () => import('../characters/characters.module').then( m => m.CharactersPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../characterdetails/characterdetails.module').then( m => m.CharacterdetailsPageModule)
          }
        ]
      },
      {
        path: 'episodes',
        children: [
          {
            path: '',
            loadChildren: () => import('../episodes/episodes.module').then( m => m.EpisodesPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../episodedetails/episodedetails.module').then( m => m.EpisodedetailsPageModule)
          }
        ]
      },
      {
        path: 'quotes',
        children: [
          {
            path: '',
            loadChildren: () => import('../quotes/quotes.module').then( m => m.QuotesPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../quotedetails/quotedetails.module').then( m => m.QuotedetailsPageModule)
          }
        ]
      },
      {
        path: 'deathcount',
        children: [
          {
            path: '',
            loadChildren: () => import('../deathcount/deathcount.module').then( m => m.DeathcountPageModule)
          }
        ]
      },
      {
        path: 'camera',
        children: [
          {
            path: '',
            loadChildren: () => import('../camera/camera.module').then( m => m.CameraPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}