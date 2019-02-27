const _movies = require('../_data/movies.json')
const _users = require('../_data/users.json')
const _ratings = require('../_data/ratings.json')
/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function () {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  if (await Genre.count() <= 0) {
    const GENRES = ['Action', 'Adventure', 'Animation', 'Children\'s', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Fantasy', 'Film-Noir', 'Horror', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'War', 'Western']
    for (let i = 0; i < GENRES.length; i++) {
      GENRES[i] = await Genre.findOrCreate({
        name: GENRES[i]
      }, {
        name: GENRES[i]
      })
    }

    for (let i = 0; i < _movies.length; i++) {
      const movie = _movies[i]
      const genres = [...movie.genres.split('|')]
      delete movie.genres
      await Movie.findOrCreate({
        id: movie.id
      }, movie)
  
      await Movie.addToCollection(movie.id, 'genres').members(genres.map(genreStr => {
        return GENRES.find(genre => {
          return genre.name === genreStr
        }).id
      }))
    }
  }

  if (await User.count() <= 0) {
    for (let i = 0; i < _users.length; i++) {
      const user = _users[i]
      await User.findOrCreate({
        id: user.id
      }, user)
    }
  }

  if (await Rating.count() <= 0) {
    await Rating.createEach(_ratings)
  }
};
