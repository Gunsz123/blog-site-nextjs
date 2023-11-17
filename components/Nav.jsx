"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
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
		<nav className="flex items-center justify-between">
			<Link href="/" className=" font-semibold text-lg">
				Blogtopia
			</Link>

			{session?.user ? (
				<div className="flex items-center space-x-5 relative">
					<Link className="hidden sm:block" href="/create">
						Create
					</Link>
					<Link className="hidden sm:block" href="/profile">
						Profile
					</Link>
					<button className="hidden sm:block" onClick={() => signOut()}>
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
							<Popover.Content className=" sm:hidden flex flex-col bg-slate-900 p-4 mt-2 rounded-lg">
								<Link href="/create">Create</Link>
								<Link href="/profile">Profile</Link>
								<button onClick={() => signOut()}>Sign Out</button>
							</Popover.Content>
						</Popover.Portal>
					</Popover.Root>
				</div>
			) : (
				<>
					{providers &&
						Object.values(providers).map((provider) => (
							<button
								className=" py-1 px-4 rounded-full border"
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
