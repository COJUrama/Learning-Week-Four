class Movie {
  constructor(title, genre, releaseYear, availableCopies) {
    this.title = title;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.availableCopies = availableCopies;
    this.totalCopies = availableCopies;
  }

  rentMovie() {
    if (this.availableCopies > 0) {
      console.log(`Renting ${this.title}`);
      this.availableCopies--;
      return true;
    } else {
      console.log(`Sorry, ${this.title} is currently out of stock.`);
      return false;
    }
  }

  returnMovie() {
    if (this.availableCopies < this.totalCopies) {
      console.log(`Returning ${this.title}`);
      this.availableCopies++;
      return true;
    } else {
      console.log(`All copies of ${this.title} have already been returned.`);
      return false;
    }
  }
}

class Customer {
  constructor(name) {
    this.name = name;
    this.rentedMovies = [];
  }

  rentMovie(movie) {
    if (movie.rentMovie()) {
      console.log(`${this.name} has rented ${movie.title}`);
      this.rentedMovies.push(movie);
    } else {
      console.log(`${this.name} could not rent ${movie.title}`);
    }
  }

  returnMovie(movie) {
    const index = this.rentedMovies.indexOf(movie);
    if (index !== -1) {
      if (movie.returnMovie()) {
        console.log(`${this.name} has returned ${movie.title}`);
        this.rentedMovies.splice(index, 1);
      } else {
        console.log(`${this.name} could not return ${movie.title}`);
      }
    } else {
      console.log(`${this.name} did not rent ${movie.title}`);
    }
  }
}

// Example usage:
const movie1 = new Movie('Inception', 'Sci-Fi', 2010, 5);
const movie2 = new Movie('The Shawshank Redemption', 'Drama', 1994, 3);

const customer1 = new Customer('Alice');
const customer2 = new Customer('Bob');

customer1.rentMovie(movie1);
customer2.rentMovie(movie1);
customer1.rentMovie(movie2);
