import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateSessionGuard } from './core/guards/validate-session.guard';

const routes: Routes = [
  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), },
  { path: 'angular-material', loadChildren: () => import('./angular-material/angular-material.module').then(m => m.AngularMaterialModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [ValidateSessionGuard] },
  { path: 'inventory', loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule) },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule), canActivate: [ValidateSessionGuard]  },
  { path: 'suppliers', loadChildren: () => import('./suppliers/suppliers.module').then(m => m.SuppliersModule), canActivate: [ValidateSessionGuard] },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'manage-store', loadChildren: () => import('./manage-store/manage-store.module').then(m => m.ManageStoreModule) },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule), canActivate: [ValidateSessionGuard] },

  { path: 'order-detail', loadChildren: () => import('./order-detail/order-detail.module').then(m => m.OrderDetailModule), canActivate: [ValidateSessionGuard]  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
