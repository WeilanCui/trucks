const { Pool } = require('pg');

const PG_URI='postgres://mgwlqfmt:TR9HTvNgIX5hSVOgDoYxkuWrV5Y_aG4z@fanny.db.elephantsql.com/mgwlqfmt'

const pool = new Pool({
    connectionString: PG_URI
  });

  module.exports = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback);
    }
  };