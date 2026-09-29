import { inject, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

const sections = ['homepage', 'about', 'services', 'projects', 'contact'];

// Preserve existing section URLs while using one canonical page and fragment navigation.
function redirectLegacySection(route: ActivatedRouteSnapshot) {
  const section = route.paramMap.get('section') || 'homepage';
  return inject(Router).createUrlTree(['/landing'], {
    fragment: sections.includes(section) ? section : 'homepage',
  });
}

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'landing/:section',
    component: LandingComponent,
    canActivate: [redirectLegacySection],
  },
  { path: 'landing', component: LandingComponent },
  { path: '**', redirectTo: 'landing' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 100],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
