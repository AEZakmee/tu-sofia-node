import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Hero } from '../hero.model';

@Injectable()
export class HeroService {
  constructor(private http: HttpClient) {}

  getAllHeroes() {
    return this.http.get(`${environment.backendUrl}/hero`);
  }

  createHero(hero: Hero) {
    return this.http.post(`${environment.backendUrl}/hero`, hero);
  }
}
