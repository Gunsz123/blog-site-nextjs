import Image from "next/image";
import { useRouter } from "next/navigation";

const Card = ({ _id, images, tag, creator, title }) => {
	const router = useRouter();
	return (
		<article
			onClick={() => router.push(`/blog/${_id}`)}
			className=" font-workSans flex flex-col border rounded-lg border-[#242535] shadow-sm shadow-[#242535] cursor-pointer relative p-3 hover:shadow-lg hover:shadow-[#242535] hover:-translate-y-2 transition-all w-full gap-2" 
		>
			<div className="relative h-60 overflow-hidden aspect-ratio-16/9 rounded-lg">
				<Image layout="fill" objectFit="cover" src={images[0]} alt="" />
			</div>
			<h4 className="text-sm font-semibold text-[#4B6BFB] bg-[#4B6BFB]/10 w-fit px-2 py-1 rounded-lg">{tag}</h4>
			<h2 className=" text-xl font-semibold">{title.substring(0, 35)}</h2>
			<div className="flex items-center gap-2">
				<Image
					width={35}
					height={35}
					src={creator.image}
					alt=""
					className="rounded-full"
				/>
				<h3 className=" text-[#97989F]"> {creator.username} </h3>
			</div>
		</article>
	);
};

export default Card;
