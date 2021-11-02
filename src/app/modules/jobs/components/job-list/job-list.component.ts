import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: any[] = [];
  loading = false;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.loading = true;
    this.jobService.getJobs().subscribe(
      data => {
        this.jobs = data;
        this.loading = false;
      },
      err => {
        console.log(err);
        this.loading = false;
      }
    )
  }

}
