import {Component} from 'angular2/core';

// selector specifies a simple CSS selector for a host HTML element named my-app
@Component({
    selector: 'my-app',
    template: '<h1>Super Heros!!</h1>'
})
export class AppComponent { }
// exporting turns the file into a module
// The name of the file (without extension) is usually the name of the module
// e.g. AppComponent
