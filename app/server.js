import mongoose from "mongoose"



let isConnected = false;

export async function connectMongoDb() {
    if (isConnected) return;
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        isConnected = true;
        console.log("MongoDB ansluten");
    } catch (error) {
        console.error("MongoDB anslutning misslyckades", error);
        throw error;
    }
}
