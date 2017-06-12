"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var core_1 = require("@angular/core");
var track_scroll_config_1 = require("./track-scroll.config");
var TrackScrollDirective = (function () {
    function TrackScrollDirective(element) {
        this.element = element;
        this.trackScrollConfig = {};
        this.trackScrollEnter = new core_1.EventEmitter();
        this.trackScrollLeave = new core_1.EventEmitter();
        this.prestatus = '';
        this.status = 'outside';
    }
    TrackScrollDirective.prototype.track = function (event) {
        if (!_.isUndefined(this.config) && !_.isEmpty(this.config)) {
            var offsetTop = this.getCoords(this.element.nativeElement).top;
            var offsetHeight = this.element.nativeElement.offsetHeight;
            var offsetBottom = offsetTop + offsetHeight;
            var scrollY_1 = undefined;
            switch (this.config.position) {
                case 'middle':
                    scrollY_1 = this.addOffset((window.innerHeight / 2) + (window.scrollY || window.pageYOffset));
                    break;
                case 'top':
                    scrollY_1 = this.addOffset(window.scrollY || window.pageYOffset);
                    break;
                case 'bottom':
                    scrollY_1 = this.addOffset(window.innerHeight + (window.scrollY || window.pageYOffset));
                    break;
                default: break;
            }
            this.prestatus = this.status;
            if (!_.isUndefined(scrollY_1)) {
                if (offsetTop <= scrollY_1 && scrollY_1 < offsetBottom) {
                    if (this.status === 'outside') {
                        this.status = 'inside';
                        this.trackScrollEnter.emit(true);
                    }
                }
                else {
                    this.status = 'outside';
                }
            }
            if (this.status !== this.prestatus && this.status === 'outside') {
                this.trackScrollLeave.emit(true);
            }
        }
    };
    TrackScrollDirective.prototype.addOffset = function (scrollY) {
        if (this.config.offset > 0) {
            if (this.config.position === 'top') {
                return scrollY + this.config.offset;
            }
            else if (this.config.position === 'bottom') {
                return scrollY - this.config.offset;
            }
            else if (this.config.position === 'middle') {
                switch (this.config.offsetPosition) {
                    case 'top':
                        return scrollY - this.config.offset;
                    case 'bottom':
                        return scrollY + this.config.offset;
                    default:
                        break;
                }
            }
        }
        return scrollY;
    };
    TrackScrollDirective.prototype.getCoords = function (el) {
        var box = el.getBoundingClientRect();
        var body = document.body;
        var docEl = document.documentElement;
        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;
        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;
        return {
            top: Math.round(top),
            left: Math.round(left)
        };
    };
    TrackScrollDirective.prototype.ngOnInit = function () {
        this.config = _.defaults(this.trackScrollConfig, new track_scroll_config_1.TrackScrollConfig());
    };
    return TrackScrollDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TrackScrollDirective.prototype, "trackScrollConfig", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TrackScrollDirective.prototype, "trackScrollEnter", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TrackScrollDirective.prototype, "trackScrollLeave", void 0);
__decorate([
    core_1.HostListener('document:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], TrackScrollDirective.prototype, "track", null);
TrackScrollDirective = __decorate([
    core_1.Directive({
        selector: '[trackScroll]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], TrackScrollDirective);
exports.TrackScrollDirective = TrackScrollDirective;
//# sourceMappingURL=track-scroll.directive.js.map