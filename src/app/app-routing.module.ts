import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./pages/characters/characters.module').then( m => m.CharactersPageModule)
  },
  {
    path: 'characterdetails',
    loadChildren: () => import('./pages/characterdetails/characterdetails.module').then( m => m.CharacterdetailsPageModule)
  },
  {
    path: 'episodes',
    loadChildren: () => import('./pages/episodes/episodes.module').then( m => m.EpisodesPageModule)
  },
  {
    path: 'episodedetails',
    loadChildren: () => import('./pages/episodedetails/episodedetails.module').then( m => m.EpisodedetailsPageModule)
  },
  {
    path: 'quotes',
    loadChildren: () => import('./pages/quotes/quotes.module').then( m => m.QuotesPageModule)
  },
  {
    path: 'quotedetails',
    loadChildren: () => import('./pages/quotedetails/quotedetails.module').then( m => m.QuotedetailsPageModule)
  },
  {
    path: 'deathcount',
    loadChildren: () => import('./pages/deathcount/deathcount.module').then( m => m.DeathcountPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
