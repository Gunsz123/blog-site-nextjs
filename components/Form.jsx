const Form = ({ title, handleSubmit, post, setPost, submitting }) => {
	const handleInputChange = (e) => {
		setPost((prevPost) => ({ ...prevPost, blog: e.target.value }));
		// Dynamically adjust the textarea height
		e.target.style.height = "auto";
		e.target.style.height = e.target.scrollHeight + "px";
	};

	const handleImageChange = (e) => {
		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			setPost((prev) => ({
				...prev,
				images: [...(prev.images || []), reader.result],
			}));
		};
		reader.readAsDataURL(file);
	};

	return (
		<section className="flex flex-col font-jakartaSans  items-center">
			<h2 className=" p-2 font-bold text-7xl bg-gradient-to-r from-blue to-violet-700 bg-clip-text text-transparent">
				{title} Blog
			</h2>
			<form
				onSubmit={(e) => handleSubmit(e)}
				action=""
				className="flex flex-col flex-1 "
			>
				<div className="relative">
					<textarea
						value={post.blog}
						onChange={(e) => handleInputChange(e)}
						className=" overflow-hidden outline-none font-workSans p-4 resize-none mt-3 w-[75vw] min-h-[60vh] bg-[#242535] rounded-lg pb-12"
						placeholder="Write your blog"
					/>
					<input
						accept="image/*"
						onChange={(e) => handleImageChange(e)}
						id="fileinput"
						type="file"
						className=" hidden"
					/>
					<label
						htmlFor="fileinput"
						className=" absolute bottom-4 left-2 font-bold bg-gradient-to-r from-blue to-green-400 cursor-pointer bg-clip-text text-transparent"
					>
						Add Images
					</label>
				</div>

				<input
					onChange={(e) =>
						setPost((prevPost) => ({ ...prevPost, tag: e.target.value }))
					}
					value={post.tag}
					type="text"
					className=" outline-none font-workSans p-2 mt-3 w-[75vw]  bg-[#242535] rounded-lg"
					placeholder="Add tag"
				/>
				<button
					type="submit"
					className=" w-fit ml-auto mt-3 py-1 px-4 rounded-full border"
				>
					{submitting ? `${title}...` : title}
				</button>
			</form>
		</section>
	);
};

export default Form;
