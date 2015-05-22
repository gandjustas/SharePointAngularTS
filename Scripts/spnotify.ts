// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    export interface ISpNotify {
        showLoading(sticky?: boolean) : string;
        show(msg: string, sticky?: boolean): string;
        remove(id: string):void;
    }
    
    class SpNotify implements ISpNotify {
        static $inject: string[] = [];


        showLoading(sticky: boolean = false) {
            return SP.UI.Notify.showLoadingNotification(sticky);
        }

        show(msg: string, sticky: boolean = false) {
            return SP.UI.Notify.addNotification(msg, sticky);
        }

        remove(id: string) {
            SP.UI.Notify.removeNotification(id);
        }
    }

    angular.module("app").service("$spnotify", SpNotify);
}