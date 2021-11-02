import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobListComponent } from './components/job-list/job-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatchingCandidatesComponent } from './components/matching-candidates/matching-candidates.component';


@NgModule({
  declarations: [
    JobListComponent,
    MatchingCandidatesComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule
  ]
})
export class JobsModule { }
