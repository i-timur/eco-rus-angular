import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainLayoutComponent} from '@components/main-layout/main-layout.component';
import {HomeComponent} from '@pages/home/home.component';
import {MarketComponent} from '@pages/market/market.component';
import {MapComponent} from '@pages/map/map.component';
import {MinorLayoutComponent} from '@components/minor-layout/minor-layout.component';
import {MapCardsComponent} from '@components/map-cards/map-cards.component';
import {MapCardDetailsComponent} from '@components/map-card-details/map-card-details.component';
import {ProfileComponent} from '@pages/profile/profile.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'market', component: MarketComponent},
      {path: 'profile', component: ProfileComponent}
    ]
  },
  {
    path: '', component: MinorLayoutComponent, children: [
      {path: 'map', component: MapComponent, children: [
          {path: '', component: MapCardsComponent},
          {path: 'details/:id', component: MapCardDetailsComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
