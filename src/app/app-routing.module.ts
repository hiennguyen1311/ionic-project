import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@services/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'scan',
    loadChildren: () =>
      import('./modules/scan/scan.module').then((m) => m.ScanPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'barcode-scanningg',
    loadChildren: () =>
      import('./modules/barcode-scanning/barcode-scanning.module').then(
        (m) => m.BarcodeScanningModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'text-recongition',
    loadChildren: () =>
      import('./modules/text-recongition/text-recongition.module').then(
        (m) => m.TextRecongitionPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./modules/tabs/tabs.module').then((m) => m.TabsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./modules/menu/menu.module').then((m) => m.MenuPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then(
        (m) => m.ProfilePageModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
