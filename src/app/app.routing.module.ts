import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {CarouselComponent} from './carousel/carousel.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {RegisterFormComponent} from './register/register.component';
import {RegulationsComponent} from './regulations/regulations.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RegisterGridComponent} from './register-grid/register-grid.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {LoggedComponent} from './logged/logged.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuardsService} from './services/auth-guard.service';
import {ResourcesComponent} from './resources/resources.component';
import {ResourcesPicturesComponent} from './resources-pictures/resources-pictures.component';
import {ContactComponent} from './contact/contact.component';
import {AddResourcesComponent} from './add-resources/add-resources.component';
import {DashboardAdminComponent} from './dashboardAdmin/dashboardAdmin.component';
import {RentalComponent} from './rental/rental.component';
import {AdminGuardService} from './services/admin-guard.service';
import {RentalsGridComponent} from './rentals-grid/rentals-grid.component';
import {DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import {ResourcesEditComponent} from './resources-edit/resources-edit.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: MainComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'register',
        component: RegisterFormComponent
    },
    {
        path: 'regulations',
        component: RegulationsComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'logged',
        component: LoggedComponent,
        canActivate: [AuthGuardsService],
        children: [
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate: [AuthGuardsService]
            },
            {
                path: 'profile/:id',
                component: ProfileComponent,
                canActivate: [AuthGuardsService]
            },
            {
                path: 'resources',
                component: ResourcesComponent,
                canActivate: [AuthGuardsService]
            },
            {
                path: 'resources-edit/:id',
                component: ResourcesEditComponent,
                canActivate: [AuthGuardsService]
            },
            {
                path: 'resources-pictures/:id',
                component: ResourcesPicturesComponent,
                canActivate: [AuthGuardsService]
            },
            {
              path: 'rentals',
              component: RentalsGridComponent,
              canActivate: [AuthGuardsService]
            },
            {
                path: 'rental/:resourceId/:rentalId',
                component: RentalComponent,
                canActivate: [AuthGuardsService]
            },
            {
                path: 'user-details/:id',
                component: UserDetailsComponent,
                canActivate: [AuthGuardsService]
            },
            {
                path: 'register-forms',
                component: RegisterGridComponent,
                canActivate: [AuthGuardsService, AdminGuardService]
            },
            {
                path: 'dashboard-admin',
                component: DashboardAdminComponent,
                canActivate: [AuthGuardsService, AdminGuardService]
            },
            {
              path: 'dashboard-user',
              component: DashboardUserComponent,
              canActivate: [AuthGuardsService],
          },
            {
              path: 'my-reservations',
              component: MyReservationsComponent,
              canActivate: [AuthGuardsService]
            },
            {
                path: 'add-resources/:id',
                component: AddResourcesComponent,
                canActivate: [AuthGuardsService]
            },
        ]
    },
    {
        path: 'rent',
        component: RentalComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
