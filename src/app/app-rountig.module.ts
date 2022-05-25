import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthsRountigModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRountigModule } from './pages/pages.routing';

const routes: Routes = [{ path: '**', component: NopagefoundComponent }];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRountigModule,
    AuthsRountigModule,
  ],
  exports: [RouterModule],
})
export class AppRountigModule {}
