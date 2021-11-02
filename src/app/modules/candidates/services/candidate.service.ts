import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }

  getCandidates() {
    const url = `${environment.candidatesApiBaseUrl}/candidates`;
    return this.http.get<any[]>(url);
  }

  getCandidateById(id: number) {
    const url = `${environment.candidatesApiBaseUrl}/candidates/${id}`;
    return this.http.get<any>(url);
  }

  getCandidatesBySkillTags(skilltags: string[]) {
    let params = new HttpParams();
    for (let tag in skilltags) {
      params = params.set('skillTags', tag);
    }
    const url = `${environment.candidatesApiBaseUrl}/candidates/find/by-skilltags?${params.toString()}`;
    return this.http.get<any[]>(url);
  }
}
