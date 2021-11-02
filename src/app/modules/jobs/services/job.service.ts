import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  getJobs() {
    const url = `${environment.jobsApiBaseUrl}/jobs`;
    return this.http.get<any[]>(url);
  }

  findMatchingJobsBySkillTags(skillTags: string[]) {
    const url = `${environment.jobsApiBaseUrl}/jobs/find/by-skilltags`;
    return this.http.post<any[]>(url, {
      skillTags
    });
  }
}
