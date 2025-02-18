const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // This will only log the error, not send an error response
      console.error(err);
      res.status(500).send('Something went wrong');
    } else {
      res.json(user);
    }
  });
});