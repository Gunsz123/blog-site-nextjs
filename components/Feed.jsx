"use client";
import { useEffect, useState } from "react";
import Card from "./Card";

const Feed = () => {
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		const fetchBlogs = async () => {
			const response = await fetch("/api/blog");
			const data = await response.json();
			setBlogs(data);
		};
		fetchBlogs();
	}, []);
	return (
		<section className="flex flex-col">
			<h2 className=" mt-4 sm:text-3xl text-xl font-jakartaSans font-semibold">
				Latest Posts
			</h2>
			<div className="flex-1 w-full grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-3 gap-12 mt-8  ">
				{blogs.map((blog) => (
					<Card key={blog._id} {...blog} />
				))}
			</div>
		</section>
	);
};

export default Feed;
