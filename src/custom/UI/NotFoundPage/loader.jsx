import React from 'react'
import style from './loader.module.scss'

const Loader = ({ children, fontSize }) => {
	return (
		<div className={style.loaderWrapper}>
			<h2 style={{ fontSize: fontSize }} class={style.animate}>
				{children}
			</h2>
		</div>
	)
}

export default Loader
