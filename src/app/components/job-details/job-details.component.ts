import { Component, inject, Input, OnInit } from '@angular/core';
import { JobDetails } from '../../models/job-details.models';
import { JobsService } from '../../services/jobs.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [HttpClientModule, AsyncPipe],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css',
  providers: [JobsService],
})
export class JobDetailsComponent implements OnInit {
  private jobsService = inject(JobsService);

  @Input() jobId!: number;

  jobDetails$!: Observable<JobDetails>;

  ngOnInit() {
    this.jobDetails$ = this.jobsService.getJobDetails(this.jobId);
  }
}
