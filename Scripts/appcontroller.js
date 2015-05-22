// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    var appcontroller = (function () {
        function appcontroller($SharePoint, $n) {
            this.$SharePoint = $SharePoint;
            this.$n = $n;
            this.title = "appcontroller";
            this.activate();
        }
        appcontroller.prototype.activate = function () {
            var _this = this;
            var loading = this.$n.showLoading(true);
            this.$SharePoint
                .getLists()
                .then(function (l) { return _this.lists = l; })
                .catch(function (e) { return _this.$n.show(e, true); })
                .finally(function () { return _this.$n.remove(loading); });
            ;
        };
        appcontroller.$inject = ["$SharePoint", "$spnotify"];
        return appcontroller;
    })();
    angular.module("app").controller("appcontroller", appcontroller);
})(App || (App = {}));
//# sourceMappingURL=appcontroller.js.map