"use client";
import classes from './image-picker.module.scss'
import {ChangeEvent, ChangeEventHandler, useRef, useState} from "react";
import Image from "next/image";

interface ImagePickerProps {
	label: string
	name: string
}

export default function ImagePicker({ label, name }: ImagePickerProps) {
	const inputRef = useRef<HTMLInputElement>(null)
	const [pickedImage, setPickedImage] = useState<string>()
	
	
	function showPicker () {
		inputRef.current?.click()
	}
	
	function handleImageChange (event:  ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0]
		if (file) {
			const fileReader = new FileReader()
			fileReader.onload = () => {
				setPickedImage(fileReader.result as string)
			}
			fileReader.readAsDataURL(file)
		}
	}
	
	return (
		<div className={classes.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={classes.controls}>
				<div className={classes.preview}>
					{pickedImage ? <Image fill src={pickedImage} alt={'Picked Image'}/> : 'No image picked'}
				</div>
				<input onChange={handleImageChange} ref={inputRef} className={classes.input} type={'file'} id={name} accept={'image/*'} name={name}/>
				<button onClick={showPicker} className={classes.button} type={'button'}>
					Pick an image
				</button>
			</div>
		</div>
	)
}
