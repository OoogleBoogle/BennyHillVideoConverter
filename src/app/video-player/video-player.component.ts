/// <reference path="../../../typings/globals/youtube/index.d.ts" />

import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-video-player',
  templateUrl: 'video-player.component.html',
  styleUrls: ['video-player.component.css']
})
export class VideoPlayerComponent implements AfterViewInit, OnInit {
  benny;
  player;
  constructor() {}

  ngOnInit() {
    this.benny = document.querySelector('.benny-theme');
    this.benny.volume = 0.5;
    this.benny.load();
  }

  onYouTubeIframeAPIReady() {
    this.player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: '2nCJZ3x4zss',
      events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.stateChange.bind(this)
      },
    });
  }

  stateChange(event) {
    if (event.data === 1) {
      this.benny.play();
    }
    else if (event.data === 2) {
      this.benny.pause();
    }
  }

  ngAfterViewInit() {
    this.onYouTubeIframeAPIReady();
  }

  onPlayerReady(event) {
    event.target.setPlaybackRate(3).setVolume(0).playVideo();
  }
}
