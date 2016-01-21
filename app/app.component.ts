import {Component} from 'angular2/core';

// Why a Hero interface and not a Hero class? We want a strongly typed Hero.
// We get strong typing with either option. Our choice depends on how we
// intend to use the Hero.
// If we need a Hero that goes beyond simple properties, a Hero with logic
// and behavior, we must define a class. If we only need type checking,
// the interface is sufficient and lighter weight.
// Lighter weight? Transpiling a class to JavaScript produces code.
// Transpiling an interface produces — nothing. If the class does nothing
// (and there is nothing for a Hero class to do right now), we prefer an
// interface.
interface Hero {
  id: number;
  name: string;
}

// selector specifies a simple CSS selector for a host HTML element named my-app
@Component({
    selector: 'my-app',
    template:`
      <h1>{{title}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <div><input [(ngModel)]="hero.name" placeholder="name"></div>
      </div>
      `
})
export class AppComponent {
  public title = 'Tour of Heroes';
  // initialize hero
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
// exporting turns the file into a module
// The name of the file (without extension) is usually the name of the module
// e.g. AppComponent
