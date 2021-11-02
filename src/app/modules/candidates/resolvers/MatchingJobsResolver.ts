import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CandidateService } from '../services/candidate.service';

@Injectable({ providedIn: 'root' })
export class MatchingJobsResolver implements Resolve<any> {
    constructor(private candidateService: CandidateService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
        const id = route.params['candidateId'];
        return this.candidateService.getCandidateById(id);
    }
}