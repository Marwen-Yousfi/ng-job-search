import { Component, inject } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { JobComponent } from '../../components/job/job.component';
import { HttpClientModule } from '@angular/common/http';
import { Job } from '../../models/job.models';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'job-list-page',
  standalone: true,
  imports: [JobComponent, HttpClientModule],
  templateUrl: './job-list-page.component.html',
  styleUrl: './job-list-page.component.css',
  providers: [JobsService]
})
export class JobListPageComponent {

  private jobsService = inject(JobsService);
  private favoritesService = inject(FavoritesService);

  jobs = toSignal(this.jobsService.getJobs());
  favorites = this.favoritesService.getFavoritesJobIds();

  handleFavorite(job: Job): void {
    if (this.isFavorite(job)) {
      this.favoritesService.removeFromFavoritesJobIds(job.id);
    } else {
      this.favoritesService.addFavoriteJobId(job.id);
    }
  }

  isFavorite(job: Job): boolean {
    return this.favorites().includes(job.id);
  }

}
