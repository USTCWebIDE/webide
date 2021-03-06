import React, { useRef, useState } from "react"
import useDraggable from "../../hooks/useDraggable.js"
import "./draggle.css"

function Draggle({
	children, // 两列布局
	min = 0, // 左侧最小宽度
	max = Infinity, // 左侧最大宽度
	containerWidth = 0, // 容器宽度
	containerHeight = 0, // 容器高度
	initLeftWidth = 0, // 初始左侧容器宽度
	handler = (
		<div
			style={{
				width: 10,
				height: "100%",
				background: "rgb(77, 81, 100)",
			}}
		/>
	), // 拖拽器
	onWidthChange = width => width, // 左侧容器高度变化
	onDraggle,
}) {
	const ref = useRef(null)

	const [position, setPosition] = useState({ x: initLeftWidth, y: 0 })

	const [props] = useDraggable(
		ref,
		{
			onMouseMove: ({ x, y }) => {
				let _x = x
				if (_x < min) _x = min
				if (_x > max) _x = max
				if (onWidthChange) onWidthChange(_x)
				setPosition({ x: _x, y })
				onDraggle()
			},
		},
		{ overbound: false }
	)
	const _handler = handler ? (
		React.cloneElement(handler, {
			...handler.props,
			style: {
				...handler.props.style,
				pointerEvents: "none",
			},
		})
	) : (
		<span style={{ fontSize: 18, pointerEvents: "none" }}>》</span>
	)

	return (
		<div ref={ref} className="root" style={{ width: containerWidth, height: containerHeight }}>
			<div className="left" style={{ width: position.x }}>
				{children[0]}

				<div className="handler" {...props}>
					{_handler}
				</div>
			</div>
			<div className="right" style={{ width: containerWidth - position.x }}>
				{children[1]}
			</div>
		</div>
	)
}

export default Draggle
