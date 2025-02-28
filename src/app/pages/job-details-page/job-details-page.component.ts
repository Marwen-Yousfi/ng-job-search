import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { JobDetailsComponent } from '../../components/job-details/job-details.component';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-job-details-page',
  standalone: true,
  imports: [JobDetailsComponent, AsyncPipe, RouterModule],
  templateUrl: './job-details-page.component.html',
  styleUrl: './job-details-page.component.css'
})
export class JobDetailsPageComponent {

  private route = inject(ActivatedRoute);

  JobId$: Observable<number> = this.route.paramMap.pipe(
    map(params => Number(params.get('jobId')))
  );

}
