import mongoose from "mongoose"


const MONGO_URI = process.env.MONGO_URI

export const connectMongoDb = () => {
    try {
        mongoose.connect(MONGO_URI)
        console.log('Connected to MongoDb')
    } catch (error) {
        console.log(error)
    }
}

