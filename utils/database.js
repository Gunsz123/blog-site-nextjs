import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
	mongoose.set("strictQuery", true);
	if (isConnected) {
		console.log("Already connected To mongoDB");
		return;
	}
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			dbName: "blog_sharing",
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		isConnected = true;
		console.log("Connected To mongoDB");
	} catch (error) {
		console.error("cant connect to db", error);
	}
};
