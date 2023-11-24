"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { usePathname } from "next/navigation";

const Nav = () => {
	const links = [
		{ name: "Home", href: "/" },
		{ name: "Create", href: "/create" },
		{ name: "Profile", href: "/profile" },
		{ name: "Blog", href: "/blog" },
	];
	const pathname = usePathname();
	const { data: session } = useSession();
	const [providers, setProviders] = useState(null);

	useEffect(() => {
		const setAuthProviders = async () => {
			const response = await getProviders();
			setProviders(response);
		};

		setAuthProviders();
	}, []);

	return (
		<nav className="flex items-center justify-between pt-2">
			<Link href="/" className=" font-semibold text-lg">
				<Image src="/assets/Union.png" width={36} height={36} className="" />
			</Link>

			{session?.user ? (
				<div className="flex items-center space-x-5 relative">
					{links.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className={`hidden sm:block border border-transparent hover:text-purple hover:border-b hover:border-b-purple transition-all ${
								// Check if the current path exactly matches the link's href
								pathname === link.href || pathname.startsWith(`${link.href}/`)
									? "text-purple border-b border-b-purple"
									: ""
							}`}
						>
							{link.name}
						</Link>
					))}
					<button
						className="hidden sm:block py-1 px-4 rounded-full border"
						onClick={() => signOut()}
					>
						Sign Out
					</button>
					<Popover.Root>
						<Popover.Trigger>
							<Image
								src={session?.user.image}
								alt="user"
								height={37}
								width={37}
								className=" rounded-full"
							/>
						</Popover.Trigger>
						<Popover.Portal>
							<Popover.Content className=" sm:hidden flex flex-col items-center space-y-2 bg-slate-900 py-4 px-8 mt-2 mr-4 rounded-lg">
								<Link href="/create">Create</Link>
								<Link href="/profile">Profile</Link>
								<button
									className="py-1 px-4 rounded-full border"
									onClick={() => signOut()}
								>
									Sign Out
								</button>
							</Popover.Content>
						</Popover.Portal>
					</Popover.Root>
				</div>
			) : (
				<>
					{providers &&
						Object.values(providers).map((provider) => (
							<button
								className=" py-1 px-4 rounded-full border "
								key={provider.name}
								onClick={() => signIn(provider.id)}
							>
								Sign In
							</button>
						))}
				</>
			)}
		</nav>
	);
};

export default Nav;
