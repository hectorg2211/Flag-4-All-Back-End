const express = require('express');
const morgan = require('morgan');

const scheduleRouter = require('./routes/scheduleRoutes');

const app = express();

// Development Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser
app.use(express.json());

// Routes
app.use('/api/v1/schedule', scheduleRouter);
// app.use('/api/v1/teams', teamsRouter);
// app.use('/api/v1/players', playersRouter);

module.exports = app;
