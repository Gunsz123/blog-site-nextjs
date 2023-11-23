"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
const Blog = () => {
	const params = useParams();
	const [blog, setBlog] = useState(null);
	useEffect(() => {
		const fetchBlog = async () => {
			const response = await fetch(`/api/blog/${params.id}`);
			const data = await response.json();

			setBlog(data);
		};

		console.log("FETCHING DATA");

		fetchBlog();
	}, [params.id]);
	return (
		<section className="container mt-10 space-y-8 font-workSans relative">
			<h6 className="  bg-[#4B6BFB] w-fit px-3 py-2 rounded-lg">{blog?.tag}</h6>
			<h1 className=" text-4xl font-semibold">{blog?.title}</h1>
			<div className="flex items-center gap-4">
				<Image
					src={blog?.creator.image}
					width={40}
					height={40}
					className="rounded-full"
				/>
				<p className="text-[#696A75] text-lg">{blog?.creator.username}</p>
			</div>
			<Image
				src={blog?.images[0]}
				layout="responsive"
				height={462}
				width={1000}
			/>
			<p className=" font-serif text-[#BABABF] text-xl leading-relaxed">
				{blog?.blog}
			</p>
		</section>
	);
};

export default Blog;
