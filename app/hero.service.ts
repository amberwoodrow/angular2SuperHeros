// TypeScript sees the @Injectable() decorator and emits metadata about our service
// , metadata that Angular may need to inject other dependencies into this service.
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }
  // See the "Take it slow" appendix
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    );
  }
}
// Our HeroService could get Hero data from anywhere. It could get the data from
// a web service, mock data, or local storage
// inject hero service vs create a new HeroSerive instance to avoid limitations
