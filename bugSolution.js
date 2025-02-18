const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Error fetching user:', err);
      // Provide a more informative error response to the client
      res.status(500).json({ error: 'Failed to fetch user' });
      return; // Important to stop further execution
    }
    if (!user) {
        res.status(404).json({error: 'User not found'});
        return;
    }
    res.json(user);
  });
});