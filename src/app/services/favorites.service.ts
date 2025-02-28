import { Injectable, Signal, signal } from '@angular/core';
import { Job } from '../models/job.models';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private static readonly LOCAL_STORAGE_FAVORITES_JOBS = 'FAVORITES_JOBS';

  private favoritesJobIds = signal<number[]>(this.getFavoritesJobIdsFromStorage());


  getFavoritesJobIds(): Signal<number[]> {
    return this.favoritesJobIds.asReadonly();
  }

  addFavoriteJobId(jobOffer: number) {

    if (this.favoritesJobIds().includes(jobOffer)) {
      return;
    }

    const updatedList = [...this.favoritesJobIds(), jobOffer];
    this.favoritesJobIds.set(updatedList);
    this.saveFavoritesJobIds(updatedList);

  }

  removeFromFavoritesJobIds(jobOffer: number): void {
    const updatedList = this.favoritesJobIds().filter((code) => code !== jobOffer);
    this.favoritesJobIds.set(updatedList);
    this.saveFavoritesJobIds(updatedList);
  }

  private saveFavoritesJobIds(list: number[]) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(FavoritesService.LOCAL_STORAGE_FAVORITES_JOBS, JSON.stringify(list));
    }
  }


  private getFavoritesJobIdsFromStorage(): number[] {
    if (typeof localStorage === 'undefined') {
      return [];
    }
    const storedData = localStorage.getItem(FavoritesService.LOCAL_STORAGE_FAVORITES_JOBS);
    return storedData ? JSON.parse(storedData) : [];
  }

}
