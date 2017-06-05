import { Injectable, Inject } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  constructor(private http: Http, @Inject('http://localhost/api') private apiUrl) {}

  getVideos() {
    return this.http.get(`${this.apiUrl}/videos`)
                    .map(res => res.json().data);
  }
}
