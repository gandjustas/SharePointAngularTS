// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    export interface ISharePoint {
        getLists: () => ng.IPromise<SP.List[]>;
    }
    
    class SharePointServcie implements ISharePoint {
        static $inject: string[] = ["$q"];

        constructor(public $q: ng.IQService) {
        }

        getLists() {
            var promise = this.$q.defer<SP.List[]>();
            SP.SOD.executeFunc("sp.js", "SP.ClientContext", () => {
                var ctx = SP.ClientContext.get_current();
                var hostUrl = decodeURIComponent(SP.ScriptHelpers.getDocumentQueryPairs()['SPHostUrl']);
                var appCtx = new SP.AppContextSite(ctx, hostUrl);
                var hostWeb = appCtx.get_web();
                var lists = hostWeb.get_lists();
                ctx.load(lists);

                ctx.executeQueryAsync(() => {
                    var result: SP.List[] = [];
                    for (var e = lists.getEnumerator(); e.moveNext();) {
                        result.push(e.get_current());
                    }
                    promise.resolve(result);
                },
                    (o, args) => { promise.reject(args.get_message()); });
            });
            return promise.promise;
        }
    }

    angular.module("app").service("$SharePoint", SharePointServcie);
}