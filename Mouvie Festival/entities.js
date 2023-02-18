class Mouvie {
  constructor(title, duration, genre) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
  }
  getData() {
    return `${this.title}, ${
      this.duration
    } min, ${this.genre[0].toUpperCase()}${this.genre[
      this.genre.length - 1
    ].toUpperCase()}`;
  }
  getMouvie() {
    return {
      name: this.title,
      duration: Number(this.duration),
      genre: this.genre,
    };
  }
}

class Program {
  constructor(date) {
    this.date = date;
    this.movieNumber = film.length;
    this.movies = [];
    this.duration = 0;
  }

  getInfo() {
    if (this.movies.length == 0) {
      return `${this.date}, program, duration: 0`;
    } else {
      var movieDuration = 0;
      this.movies.forEach((item) => {
        movieDuration += item.length;
      });
      var description = this.movies.length == 1 ? "movie" : "movies";
      return `${this.date}, ${this.movies.length} ${description}, duration: ${movieDuration}`;
    }
  }

  addMovie(movie) {
    this.movies.push(movie);
  }
}
