import PropTypes from "prop-types"

import classNames from "classnames/bind"
import styles from "./DefaultLayout.module.scss"

import Header from "../components/Header"

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
	return (
		<div className={cx("wrapper")}>
			<Header />
		</div>
	)
}

DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default DefaultLayout
