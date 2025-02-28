import { Component, inject, Signal } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { Job } from '../../models/job.models';
import { JobsService } from '../../services/jobs.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { JobComponent } from '../../components/job/job.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-favorites-jobs-page',
  standalone: true,
  imports: [JobComponent, HttpClientModule],
  templateUrl: './favorites-jobs-page.component.html',
  styleUrl: './favorites-jobs-page.component.css',
  providers: [JobsService]
})
export class FavoritesJobsPageComponent {

  private favoritesService = inject(FavoritesService);
  private jobsService = inject(JobsService);

  favoritesJobIds: Signal<number[]> = this.favoritesService.getFavoritesJobIds();
  favoritesJobs: Signal<Job[]> = toSignal(
    this.jobsService.getFavoritesJobs(this.favoritesJobIds()),
    { initialValue: [] }
  );

}
