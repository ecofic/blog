angular.module("demo", []).directive("ballcard", function () {
    return {
        restrict: "E",
        scope: {
            playerData: "=player"
        },
        template: "<div style='border:solid 1px #000; padding:6px; margin:6px;'>" +
            "<div style='font-weight:bold;'>{{playerData.firstName}} {{playerData.lastName}}</div>" +
            "<div>{{playerData.position}} - {{playerData.number}}</div>" +
            "</div>"
    }
});