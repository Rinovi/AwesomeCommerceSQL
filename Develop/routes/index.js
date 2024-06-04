const router = require('express').Router();
const apiRoutes = require('./api');

// Handle requests to /api by forwarding to apiRoutes
router.use('/api', apiRoutes);

// Catch-all route for any other routes
router.use((req, res) => {
  res.status(404).send("<h1>Wrong Route!</h1>");
});

module.exports = router;