import { Component, Input } from '@angular/core';
import { Job } from '../../models/job.models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  @Input() job!: Job;
}
