import mongoose from "mongoose"


const MONGO_URI = process.env.MONGO_URI

export const connectMongoDb = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDb')
    } catch (error) {
        console.log(error)
    }
}

