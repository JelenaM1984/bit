class Mouvie {
  constructor(name, duration, genre) {
    this.name = name;
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
      name: this.name,
      duration: Number(this.duration),
      genre: this.genre,
    };
  }
}
/* creating class Program */
class Program {
  constructor(date, movieList, fullDuration) {
    this.date = date;
    this.movieList = movieList;
    this.fullDuration = fullDuration;
  }

  getData() {
    return `${this.date}, ${this.movieListCount} movies, duration: ${this.fullDuration}min`;
  }
}

class MovieProgram {
  constructor(movie, program) {
    this.movie = movie;
    this.program = program;
  }
  getData() {
    return `${this.movie} - ${this.program}`;
  }
}
