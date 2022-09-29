import PropTypes from "prop-types";

import { useState } from "react";
import classNames from "classnames";
import images from "../../assets/images";
import styles from "./Image.module.scss";

function Image({
	src,
	alt,
	className,
	fallback: customFallback = images.noImage,
	...props
}) {
	const [fallback, setFallback] = useState("");

	console.log("Image");
	const handleError = () => {
		setFallback(customFallback);
	};

	return (
		<img
			className={classNames(styles.wrapper, className)}
			src={fallback || src}
			alt={alt}
			{...props}
			onError={handleError}
		/>
	);
}

Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	className: PropTypes.string,
	fallback: PropTypes.string,
};

export default Image;
