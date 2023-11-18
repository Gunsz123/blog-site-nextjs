import Blog from "@/models/blog";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
	const { blog, tag, userId } = await request.json();

	try {
		await connectToDB();

		const newBlog = new Blog({
			creator: userId,
			blog,
			tag,
		});

		await newBlog.save();

		return new Response("Blog created succesfully", { status: 200 });
	} catch (error) {
		return new Response("Failed to create Blog", { status: 400 });
	}
};
