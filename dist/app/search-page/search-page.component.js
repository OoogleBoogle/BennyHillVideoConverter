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
var youtube_service_1 = require('../youtube.service');
var shared_1 = require('../shared');
var SearchPageComponent = (function () {
    function SearchPageComponent(YTcall) {
        this.YTcall = YTcall;
        this.videos = [];
        this.youtubeId = null;
    }
    SearchPageComponent.prototype.ngOnInit = function () {
    };
    SearchPageComponent.prototype.getResults = function (searchTerm) {
        var _this = this;
        this.YTcall.getVideos(searchTerm)
            .then(function (result) {
            console.log(result);
            _this.videos = result;
        })
            .catch(function (err) { return console.log(err); });
    };
    SearchPageComponent.prototype.playVideo = function (videoId) {
        this.youtubeId = videoId;
        this.showVideo = true;
    };
    SearchPageComponent.prototype.closedVideo = function (x) {
        this.showVideo = false;
        this.youtubeId = null;
    };
    SearchPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-search-page',
            templateUrl: 'search-page.component.html',
            styleUrls: ['search-page.component.css'],
            providers: [youtube_service_1.YoutubeService],
            directives: [shared_1.VideoPlayerComponent]
        }), 
        __metadata('design:paramtypes', [youtube_service_1.YoutubeService])
    ], SearchPageComponent);
    return SearchPageComponent;
}());
exports.SearchPageComponent = SearchPageComponent;
//# sourceMappingURL=search-page.component.js.map