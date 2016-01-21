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

// 1. ES2015 template string ``
// 2. Selector specifies a simple CSS selector for a host HTML element named my-app
// 3. The (*) prefix to ngFor indicates that the <li> element and its children
// constitute a master template.
// 4. # prefix before "hero" identifies the hero as a local template variable.
// 5. We can reference this variable within the template to access a hero’s properties.
// 6. ngIf directive removes the hero detail HTML from the DOM
// 7. ngIf and ngFor are called “structural directives” because they can change the
// structure of portions of the DOM.
@Component({
    selector: 'my-app',
    template:`
      <h1>{{title}}</h1>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="#hero of heroes"
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <div *ngIf="selectedHero">
        <h2>{{selectedHero.name}} details!</h2>
        <div><label>id: </label>{{selectedHero.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="selectedHero.name" placeholder="name"/>
        </div>
      </div>
      `,
      styles:[`
        .selected {
          background-color: #CFD8DC !important;
          color: white;
        }
        .heroes {
          margin: 0 0 2em 0;
          list-style-type: none;
          padding: 0;
          width: 10em;
        }
        .heroes li {
          cursor: pointer;
          position: relative;
          left: 0;
          background-color: #EEE;
          margin: .5em;
          padding: .3em 0em;
          height: 1.6em;
          border-radius: 4px;
        }
        .heroes li.selected:hover {
          color: white;
        }
        .heroes li:hover {
          color: #607D8B;
          background-color: #EEE;
          left: .1em;
        }
        .heroes .text {
          position: relative;
          top: -3px;
        }
        .heroes .badge {
          display: inline-block;
          font-size: small;
          color: white;
          padding: 0.8em 0.7em 0em 0.7em;
          background-color: #607D8B;
          line-height: 1em;
          position: relative;
          left: -1px;
          top: -4px;
          height: 1.8em;
          margin-right: .8em;
          border-radius: 4px 0px 0px 4px;
        }
    `]
})
// styles will only apply to our AppComponent and won't "leak" to the outer HTML.

export class AppComponent {
  public title = 'Tour of Heroes';
  // initialize hero
  public heroes = HEROES;
  public selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; }
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];

// exporting turns the file into a module
// The name of the file (without extension) is usually the name of the module
// e.g. AppComponent
