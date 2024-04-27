import classes from "./loader.module.scss";

interface LoaderProps {
	text: string
}

export default function Loader({ text }: LoaderProps) {
	return <p className={classes.loader}>{text}</p>
}

