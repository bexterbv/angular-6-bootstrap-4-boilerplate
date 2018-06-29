import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AssignmentComponent } from './assignment/assignment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, AssignmentComponent]
})
export class LandingModule { }
