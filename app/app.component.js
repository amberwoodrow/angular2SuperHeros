System.register(['angular2/core', './hero-detail.component', './hero.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_detail_component_1, hero_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            // defines a private _heroService property and identifies it as a HeroService injection site.
            // We have to teach the injector how to make a HeroService by registering a HeroService provider.
            // constructor(private _heroService: HeroService) { }
            // 1. ES2015 template string ``
            // 2. Selector specifies a simple CSS selector for a host HTML element named my-app
            // 3. The (*) prefix to ngFor indicates that the <li> element and its children
            // constitute a master template.
            // 4. # prefix before "hero" identifies the hero as a local template variable.
            // 5. We can reference this variable within the template to access a hero’s properties.
            // 6. ngIf directive removes the hero detail HTML from the DOM
            // 7. ngIf and ngFor are called “structural directives” because they can change the
            // structure of portions of the DOM.
            AppComponent = (function () {
                function AppComponent(_heroService) {
                    this._heroService = _heroService;
                    this.title = 'Tour of Heroes';
                }
                AppComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"#hero of heroes\"\n        [class.selected]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n    <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n  ",
                        styles: ["\n        .selected {\n          background-color: #CFD8DC !important;\n          color: white;\n        }\n        .heroes {\n          margin: 0 0 2em 0;\n          list-style-type: none;\n          padding: 0;\n          width: 10em;\n        }\n        .heroes li {\n          cursor: pointer;\n          position: relative;\n          left: 0;\n          background-color: #EEE;\n          margin: .5em;\n          padding: .3em 0em;\n          height: 1.6em;\n          border-radius: 4px;\n        }\n        .heroes li.selected:hover {\n          color: white;\n        }\n        .heroes li:hover {\n          color: #607D8B;\n          background-color: #EEE;\n          left: .1em;\n        }\n        .heroes .text {\n          position: relative;\n          top: -3px;\n        }\n        .heroes .badge {\n          display: inline-block;\n          font-size: small;\n          color: white;\n          padding: 0.8em 0.7em 0em 0.7em;\n          background-color: #607D8B;\n          line-height: 1em;\n          position: relative;\n          left: -1px;\n          top: -4px;\n          height: 1.8em;\n          margin-right: .8em;\n          border-radius: 4px 0px 0px 4px;\n        }\n      "],
                        directives: [hero_detail_component_1.HeroDetailComponent],
                        providers: [hero_service_1.HeroService]
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
// exporting turns the file into a module
// The name of the file (without extension) is usually the name of the module
// e.g. AppComponent
//# sourceMappingURL=app.component.js.map