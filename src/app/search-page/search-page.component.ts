import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { VideoPlayerComponent } from '../shared';
import { Observable } from 'rxjs'

@Component({
  moduleId: module.id,
  selector: 'app-search-page',
  templateUrl: 'search-page.component.html',
  styleUrls: ['search-page.component.css'],
  providers: [YoutubeService],
  directives: [VideoPlayerComponent]
})
export class SearchPageComponent implements OnInit {
  public videos = [];
  public youtubeId = null;
  public showVideo: boolean;

  constructor(
    private YTcall: YoutubeService) {}

  ngOnInit() {

  }

  getResults(searchTerm) {
	  this.YTcall.getVideos(searchTerm)
      .then(result => {
        console.log(result);
        this.videos = result;
      })
      .catch(err => console.log(err));
  }

  playVideo(videoId) {
    this.youtubeId = videoId;
    this.showVideo = true;
  }

  closedVideo(x: boolean) {
    this.showVideo = false;
    this.youtubeId = null;
  }
}
