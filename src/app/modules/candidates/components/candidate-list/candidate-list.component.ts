import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/modules/jobs/services/job.service';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  candidates: any[] = [];
  loading = false;

  constructor(
    private candidateService: CandidateService,
    private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.candidateService.getCandidates().subscribe(
      data => {
        console.log(data);
        this.candidates = data;
        this.loading = false;
      },
      err => {
        console.log(err);
        this.loading = false;
      }
    )
  }
}
