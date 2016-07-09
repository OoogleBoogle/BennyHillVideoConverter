import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-video-player',
  templateUrl: 'video-player.component.html',
  styleUrls: ['video-player.component.css']
})
export class VideoPlayerComponent implements AfterViewInit, OnInit {
  public benny: any;

  constructor() {}

  ngOnInit() {
    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': this.onPlayerReady
          }
        });
      } 
  }

  ngAfterViewInit() {
    this.benny = document.querySelector('.benny-theme');
    this.benny.volume = 0.5;
    // this.benny.play();
  }
  onPlayerReady(event) {
    event.target.playVideo();
  }

  play() {
    this.benny.play();
  }

  stop() {
    this.benny.load();
  }
}
