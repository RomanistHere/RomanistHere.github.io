import { useState, useEffect, useRef } from "preact/hooks"

import './Draw.css'

const tipPoint = 2500

const Draw = () => {
    const getRandColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`
    const [showPopup, setPopup] = useState(false)
    const [state, setState] = useState({
        isFocused: false,
        col: '#000',
        col2: '#000',
        dist: {x: 0, y: 0},
        prevPos: {x: 0, y: 0},
        startPos: {x: 0, y: 0},
        width: null,
        height: null,
        context: null,
        randomNumb: null,
        caps: ['round', 'butt', 'square'],
        shouldShow: true,
        totalDistance: 0,
        tipShowed: false
    })
    const canvas = useRef(null)
    const showTip = () => {
        // if (typeof window !== 'undefined' && JSON.parse(localStorage.getItem('showedTip')) === null) {
            setPopup(true)
            // localStorage.setItem('showedTip', JSON.stringify(true))
        // }
    }

    const onMouseMove = e => {
        const { startPos, prevPos, dist, totalDistance, tipShowed } = state
        const distState = {
            newDistance: 0,
            tipShowed: tipShowed
        }
		const distance = Math.sqrt(Math.pow(prevPos.x - startPos.x, 2) +
								 Math.pow(prevPos.y - startPos.y, 2))

		const a = distance * 10 * (Math.pow(Math.random(), 2) - 0.5)
	    const r = Math.random() - 0.5
		const size = (Math.random() * 15) / distance

		dist.x = (prevPos.x - startPos.x) * Math.sin(0.5) + startPos.x
		dist.y = (prevPos.y - startPos.y) * Math.cos(0.5) + startPos.y

		startPos.x = prevPos.x
		startPos.y = prevPos.y

		prevPos.x = (e.layerX)
		prevPos.y = (e.layerY)

	   // draw
        if (state.isFocused) {
            const lineWidth = 5* Math.random()*size
            state.context.lineWidth = lineWidth
            state.context.strokeWidth = lineWidth

            state.context.lineCap = state.caps[state.randomNumb]
            state.context.lineJoin = 'round'

            state.context.beginPath()
            state.context.moveTo(startPos.x, startPos.y)
            state.context.quadraticCurveTo(dist.x, dist.y, prevPos.x, prevPos.y)

            state.context.fillStyle = state.col
            state.context.strokeStyle = state.col2

            state.context.moveTo(startPos.x + a, startPos.y + a)
            state.context.lineTo(startPos.x + r + a, startPos.y + r + a)

            state.context.stroke()
            state.context.fill()

            state.context.closePath()

            if (!distState.tipShowed)
                distState.newDistance = totalDistance + distance
        }

        if (!distState.tipShowed && distState.newDistance >= tipPoint) {
            distState.tipShowed = true
            showTip()
        }

        setState({...state,
            isFocused: true,
            dist: dist,
            startPos: startPos,
            prevPos: prevPos,
            totalDistance: distState.newDistance ? distState.newDistance : totalDistance,
            tipShowed: distState.tipShowed
        })
	}

    const onClick = e => {
		e.preventDefault()
        setState({...state,
            col: getRandColor(),
            col2: getRandColor(),
            randomNumb: Math.floor(Math.random()*3),
        })
	}

    const onMouseLeave = e => {
        setState({...state,
            isFocused: false
        })
    }

    const onDoubleClick = (e) => {
		e.preventDefault()
		state.context.clearRect(0, 0, state.width, state.height)
	}

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setState({...state,
                col: getRandColor(),
                col2: getRandColor(),
                prevPos: {x: window.innerWidth/2, y: 0},
                startPos: {x: window.innerWidth/2, y: window.innerHeight/2},
                width: window.innerWidth,
                height: window.innerHeight,
                context: canvas.current.getContext('2d'),
                randomNumb: Math.floor(Math.random()*3),
                shouldShow: window.innerWidth > 1024 ? true : false
            })
        }
    }, [])

  	return  state.shouldShow ?
            <>
                <aside className={`draw_popup ${showPopup ? 'draw_popup-show' : ''}`}>
                    Click to change colors
                    Double click to reset
                </aside>
                <canvas
                    ref={canvas}
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    onClick={onClick}
                    onDoubleClick={onDoubleClick}
                    width={state.width}
                    height={state.height}
                    className='draw'
                ></canvas>
            </> : null
}

export default Draw
