const seeder = require('mongoose-seed');
const data = require('../constants/seed');
const db = 'mongodb://localhost/marvelDB';

seeder.connect(db, () => {
  seeder.loadModels(['src/models/movie.js']);
  seeder.clearModels(['movies'], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect();
    })
  });
})