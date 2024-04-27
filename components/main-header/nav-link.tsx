"use client"

import Link, {LinkProps} from "next/link";
import {usePathname} from "next/navigation";
import classes from "./nav-link.module.scss";
import {PropsWithChildren} from "react";

export default function NavLink({ children, href, ...props }: PropsWithChildren & LinkProps) {
	const path = usePathname()
	
	const isActive = path.startsWith(href as string)
	
	return <Link href={href} {...props} className={isActive ? classes.active : undefined}>
		{children}
	</Link>
}
