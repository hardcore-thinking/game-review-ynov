const express = require('express');
const cors = require('cors');

const genreRoutes = require('./routers/genres');
const platformRoutes = require('./routers/platforms');
const reviewRoutes = require('./routers/reviews');
const userRoutes = require('./routers/users');
const gameRoutes = require('./routers/games');
const authRoutes = require('./routers/auth');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/games', gameRoutes);
app.use('/genres', genreRoutes);
app.use('/platforms', platformRoutes);
app.use('/reviews', reviewRoutes);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
