import { Injectable } from '@angular/core';
import { Project } from './project';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  // url to web api, endpoint came from in-memory database
  private projectsUrl = 'api/projects';

  // returns list of projects as an observable http response
  getProjects() : Observable<Project[]> {
    const projects = this.http.get<Project[]>(this.projectsUrl);
    return projects;
  }

}
