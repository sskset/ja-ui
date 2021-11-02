import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { MatchingJobsComponent } from './components/matching-jobs/matching-jobs.component';
import { MatchingJobsResolver } from './resolvers/MatchingJobsResolver';

const routes: Routes = [
  { path: 'candidates', component: CandidateListComponent },
  {
    path: 'matching-jobs/:candidateId',
    component: MatchingJobsComponent,
    resolve: {
      candidate: MatchingJobsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }
