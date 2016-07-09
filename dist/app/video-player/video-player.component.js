/// <reference path="../../../typings/globals/youtube/index.d.ts" />
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
var core_1 = require('@angular/core');
var VideoPlayerComponent = (function () {
    function VideoPlayerComponent() {
        this.closeVideo = new core_1.EventEmitter();
    }
    VideoPlayerComponent.prototype.ngOnInit = function () {
        this.benny = document.querySelector('.benny-theme');
        this.benny.volume = 0.5;
        this.benny.load();
    };
    VideoPlayerComponent.prototype.onYouTubeIframeAPIReady = function () {
        this.player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: this.videoId,
            events: {
                'onReady': this.onPlayerReady,
                'onStateChange': this.stateChange.bind(this)
            },
        });
    };
    VideoPlayerComponent.prototype.stateChange = function (event) {
        if (event.data === 1) {
            this.benny.play();
        }
        else if (event.data === 2) {
            this.benny.pause();
        }
    };
    VideoPlayerComponent.prototype.close = function (x) {
        this.closeVideo.emit(x);
    };
    VideoPlayerComponent.prototype.ngAfterViewInit = function () {
        this.onYouTubeIframeAPIReady();
    };
    VideoPlayerComponent.prototype.onPlayerReady = function (event) {
        event.target.setPlaybackRate(3).setVolume(0).playVideo();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], VideoPlayerComponent.prototype, "videoId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], VideoPlayerComponent.prototype, "closeVideo", void 0);
    VideoPlayerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-video-player',
            templateUrl: 'video-player.component.html',
            styleUrls: ['video-player.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], VideoPlayerComponent);
    return VideoPlayerComponent;
}());
exports.VideoPlayerComponent = VideoPlayerComponent;
//# sourceMappingURL=video-player.component.js.map