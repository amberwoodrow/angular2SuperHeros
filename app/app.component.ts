import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';

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
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
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
      `],
    directives: [HeroDetailComponent]
})
// styles will only apply to our AppComponent and won't "leak" to the outer HTML.

export class AppComponent {
  public title = 'Tour of Heroes';
  public heroes = HEROES; // initalize heroes
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
