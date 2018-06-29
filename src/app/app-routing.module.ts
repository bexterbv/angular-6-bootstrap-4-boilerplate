import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing/home/home.component';
import { AssignmentComponent } from './landing/assignment/assignment.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'assignment', component: AssignmentComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
