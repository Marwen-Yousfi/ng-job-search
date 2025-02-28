import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { JobDetails } from '../models/job-details.models';
import { Job } from '../models/job.models';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private readonly http = inject(HttpClient);


  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`/jobs`);
  }

  getJobDetails(jobId: number): Observable<JobDetails> {
    return this.http.get<JobDetails>(`/jobs/${jobId}`)
  }

  getFavoritesJobs(favoritesJobIds: number[]): Observable<Job[]> {
    return this.http.get<Job[]>(`/jobs`).pipe(
      map((jobs: Job[]) => jobs.filter(job => favoritesJobIds.includes(job.id)))
    );
  }

}
