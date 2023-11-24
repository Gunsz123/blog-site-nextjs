"use client";
import Form from "@/components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateBlog = () => {
	const { data: session } = useSession();
  const router = useRouter()
	const [submitting, setSubmitting] = useState(false);
	const [post, setPost] = useState({
		blog: "",
		tag: "",
		images: [],
		title: "",
	});

	const createBlog = async (e) => {
		e.preventDefault();
		setSubmitting(true);

		try {
			await fetch("/api/blog/new", {
				method: "POST",
				body: JSON.stringify({
					blog: post.blog,
					tag: post.tag,
					images: post.images,
					userId: session?.user.id,
					title: post.title,
				}),
			});
		} catch (error) {
			console.error(error);
		}

		// After creating the Blog
		setSubmitting(false);
		setPost({
			blog: "",
			tag: "",
			title: "",
			images: [],
		});

    router.push('/')
	};
	return (
		<section className=" flex flex-col mt-10">
			<Form
				title="Create"
				handleSubmit={createBlog}
				post={post}
				setPost={setPost}
				submitting={submitting}
				setSubmitting={setSubmitting}
			/>
		</section>
	);
};

export default CreateBlog;
