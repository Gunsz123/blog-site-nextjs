import Blog from "@/models/blog";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
	try {
		await connectToDB();
		const prompt = await Blog.findById(params.id).populate("creator");

		if (!prompt) {
			return new Response("Couldnt get selected blog", { status: 400 });
		}

		return new Response(JSON.stringify(prompt), { status: 200 });
	} catch (error) {
		return new Response("Failed to get Blog", { status: 400 });
	}
};
