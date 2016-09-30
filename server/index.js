const app = require ('./lib/app.js');
// Express app.

require ('./lib/setup-mongoose');
// set up connection to mongoose db

const port = process.argv[2] || process.env.PORT || 9000;
// specify port on command line, or in the env, or default to 9000

app.listen(port, err => {
  if (err) return console.error(err);
  console.log(`Server started at http://localhost:${port}/`);
});
