import mongoose from 'mongoose';
import { config } from 'dotenv';
// import { seedCards } from './cards/seedCards';


// export const PORT = process.env.PORT || 3000;
export const connectDB = async () => {
    config();
    const connectionString = process.env.DB_CONNECTION_STRING;

    if (!connectionString) {
        console.error('No connection string provided');
        process.exit(1);
    }

    try {
        await mongoose.connect((connectionString as string));
        console.log('MongoDB connected...');
        // ~ await seedCards(); // Seed the database with cards
    } catch (err) {
        if (err instanceof Error) {
            // We know that err is an Error object, so it's safe to access err.message
            console.log('Failed to connect to the database:')
            console.error(err.message);
        }
        process.exit(1);
    }
};

