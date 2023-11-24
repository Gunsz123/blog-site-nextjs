import Feed from "@/components/Feed";

export default function Home() {
	return (
		<main className="flex flex-col container justify-center mt-10">
			<h1 className="text-center sm:p-2 font-bold 2xl:text-8xl sm:text-6xl text-5xl bg-gradient-to-r from-blue to-violet-700 bg-clip-text text-transparent font-workSans">
				Where Ideas Blossom <br className="hidden sm:block" /> Welcome to
				Blogtopia
			</h1>
      <Feed />
		</main>  
	);
} 
  