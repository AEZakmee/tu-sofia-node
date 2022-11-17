import { BadRequestException, Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { HeroDto } from './hero.dto';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private heroService: HeroService) {}

  @Get()
  async getAllHeroes() {
    const heroes = await this.heroService.findAll();
    return heroes;
  }

  @Post()
  async createOne(@Body() hero: HeroDto) {
    const heroes = await this.heroService.createOne(hero);
    return heroes;
  }

  @Put()
  async updateOne(@Body() hero: HeroDto) {
    try {
      const universes = await this.heroService.uodateHero(hero);
      return universes;
    } catch (e) {
      throw new BadRequestException();
    }
  }
}
