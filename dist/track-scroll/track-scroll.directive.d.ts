import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { TrackScrollConfigModel } from './track-scroll.config';
export declare class TrackScrollDirective implements OnInit {
    private element;
    trackScrollConfig: TrackScrollConfigModel;
    trackScrollEnter: EventEmitter<boolean>;
    trackScrollLeave: EventEmitter<boolean>;
    private config;
    private prestatus;
    private status;
    constructor(element: ElementRef);
    track(event: Event): void;
    private addOffset(scrollY);
    getCoords(el: HTMLElement): {
        top: number;
        left: number;
    };
    ngOnInit(): void;
}
