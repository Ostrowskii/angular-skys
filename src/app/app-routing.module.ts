import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", loadChildren: () => import("./features/inicio/inicio.module").then(m => m.InicioModule) },
  {path:"", loadChildren: () => import("./features/auth/auth.module").then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
