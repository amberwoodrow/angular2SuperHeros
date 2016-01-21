System.register(['angular2/platform/browser', './app.component'], function(exports_1) {
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
// We ask Angular to launch the app in a browser with our component at the root.
// When Angular calls the bootstrap function here,
// it reads the AppComponent metadata, finds the my-app selector,
// locates an element tag named my-app, and loads our application between
// those tags.
//# sourceMappingURL=boot.js.map