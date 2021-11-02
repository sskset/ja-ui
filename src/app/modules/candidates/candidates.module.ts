import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatchingJobsComponent } from './components/matching-jobs/matching-jobs.component';

@NgModule({
  declarations: [
    CandidateListComponent,
    MatchingJobsComponent
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    SharedModule
  ]
})
export class CandidatesModule { }
