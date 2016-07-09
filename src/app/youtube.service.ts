import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class YoutubeService {

  constructor(private http: Http) {}

  getVideos(searchTerm) {
    const API_KEY = "AIzaSyCsBZpMT5Q91vGuILDMIblPcVWcn50JVyI";
    let baseUrl = "https://www.googleapis.com/youtube/v3/search?";
    baseUrl += `part=snippet&order=viewCount&q=${searchTerm}`;
    baseUrl += `&type=video&videoDefinition=high&key=${API_KEY}`;
    return this.http.get(baseUrl)
      .toPromise()
      .then(res => {
        return res.json().items;
      })
      .catch(err => {
        console.log(err);
      })
  }
}
