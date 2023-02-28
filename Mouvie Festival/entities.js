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
    this.mouvieNumber = film.length;
    this.movieDuration = 0;
    var film = [];
  }

  getInfo() {
    if (this.mouvieNumber == 0) {
      return `${this.date}, program, duration: 0`;
    } else {
      var movieDuration = 0;
      this.film.forEach((item) => {
        movieDuration += film.length;
      });
      return `${this.date}, ${this.film.length}, duration: ${movieDuration}`;
    }
  }
  // addMouvie(mouvie) {
  //   this.film.push(mouvie);
  // }
}
