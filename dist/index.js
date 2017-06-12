"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var track_scroll_1 = require("./track-scroll");
var Ng2TrackScrollModule = Ng2TrackScrollModule_1 = (function () {
    function Ng2TrackScrollModule() {
    }
    Ng2TrackScrollModule.forRoot = function () {
        return { ngModule: Ng2TrackScrollModule_1, providers: [] };
    };
    return Ng2TrackScrollModule;
}());
Ng2TrackScrollModule = Ng2TrackScrollModule_1 = __decorate([
    core_1.NgModule({
        declarations: [track_scroll_1.TrackScrollDirective],
        exports: [track_scroll_1.TrackScrollDirective]
    })
], Ng2TrackScrollModule);
exports.Ng2TrackScrollModule = Ng2TrackScrollModule;
var Ng2TrackScrollModule_1;
//# sourceMappingURL=index.js.map