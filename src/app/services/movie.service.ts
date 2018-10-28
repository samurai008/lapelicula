import { Injectable  } from '@angular/core';
import { Subject  }    from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

  private queryurl = 'https://api.themoviedb.org/3/search/movie?api_key=6c80f4f2aa8378ab9427a08dde370de2&query=';
  private movieListSource = new Subject<any>();

  constructor(private http: HttpClient) {

  }

  //Observable stream
  movieList$ = this.movieListSource.asObservable();

  movieList(movies) {
    this.movieListSource.next(movies);
  }

  getMovies(query) {
    query = query.split(' ')
    .join('%20');
    return this.http.get(this.queryurl.concat(query));
  }


}
