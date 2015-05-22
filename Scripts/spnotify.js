// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    var SpNotify = (function () {
        function SpNotify() {
        }
        SpNotify.prototype.showLoading = function (sticky) {
            if (sticky === void 0) { sticky = false; }
            return SP.UI.Notify.showLoadingNotification(sticky);
        };
        SpNotify.prototype.show = function (msg, sticky) {
            if (sticky === void 0) { sticky = false; }
            return SP.UI.Notify.addNotification(msg, sticky);
        };
        SpNotify.prototype.remove = function (id) {
            SP.UI.Notify.removeNotification(id);
        };
        SpNotify.$inject = [];
        return SpNotify;
    })();
    angular.module("app").service("$spnotify", SpNotify);
})(App || (App = {}));
//# sourceMappingURL=spnotify.js.map