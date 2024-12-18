import mongoose from "mongoose"



let isConnected = false;

export async function connectMongoDb() {
  if (isConnected) return; // Om redan ansluten, gör inget.
  try {
    console.log("Ansluter till MongoDB...");
    console.log("MongoDB URI:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Ansluten till MongoDB.");
  } catch (error) {
    console.error("Kunde inte ansluta till MongoDB:", error);
  }
}
