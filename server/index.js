import { app } from './app';
import genreRoutes from './routers/genres';
import platformRoutes from './routers/platforms';
import reviewRoutes from './routers/reviews';
import userRoutes from './routers/users';
import gameRoutes from './routers/games';
import authRoutes from './routers/auth';

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/games', gameRoutes);
app.use('/genres', genreRoutes);
app.use('/platforms', platformRoutes);
app.use('/reviews', reviewRoutes);

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});