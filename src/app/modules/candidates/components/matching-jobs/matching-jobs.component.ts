import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/modules/jobs/services/job.service';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-matching-jobs',
  templateUrl: './matching-jobs.component.html',
  styleUrls: ['./matching-jobs.component.css']
})
export class MatchingJobsComponent implements OnInit {

  candidate: any;
  matchingJobs: any[] = [];
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.candidate = data['candidate'];
    });

    this.loading = true;
    this.jobService.findMatchingJobsBySkillTags(this.candidate.skillTags).subscribe(
      jobs => {
        this.matchingJobs = jobs;
        this.loading = false;
        console.log(jobs);
      },
      err => {
        console.log(err);
        this.loading = false;
      }
    )
  }

}
