import { Injectable } from '@angular/core';
import { PostDetails } from '../../models/PostDetails';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../../models/Page';

const baseURL: string = 'http://localhost:3000/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class UserContentService {

  constructor(private http: HttpClient) {}

  getUserGlobalContent(pageInfo: Page): Observable<PostDetails[]> {
    return this.http.post<PostDetails[]>(baseURL + 'post/all', pageInfo);
  }

  getUserLocalContent(pageInfo: Page): Observable<PostDetails[]> {
    return this.http.post<PostDetails[]>(baseURL + 'post/yours', pageInfo);
  }

  postUserContent(details: PostDetails): Observable<PostDetails> {
    return this.http.post<PostDetails>(baseURL + 'post', details);
  }

}
