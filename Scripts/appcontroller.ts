// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    interface Iappcontroller {
        title: string;
        activate: () => void;
    }

    class appcontroller implements Iappcontroller {
        title: string = "appcontroller";
        lists: SP.List[];

        static $inject: string[] = ["$SharePoint", "$spnotify"];

        constructor(private $SharePoint: App.ISharePoint, private $n:App.ISpNotify) {
            this.activate();
        }

        activate() {
            var loading = this.$n.showLoading(true)
            this.$SharePoint
                .getLists()
                .then(l => this.lists = l )
                .catch((e: string) => this.$n.show(e, true))
                .finally(() => this.$n.remove(loading) );
            ;

        }
    }

    angular.module("app").controller("appcontroller", appcontroller);
}