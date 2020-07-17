import React, { useState, useEffect, useRef } from 'react'

import './Card.css'

import Face from '../../components/Face/Face'
import Card__wr1 from '../../components/Card__wr1/Card__wr1'
import Card__wr2 from '../../components/Card__wr2/Card__wr2'
import Typing from '../../components/Typing/Typing'

import content from '../../static/content'
import manage from '../../static/manage'
import { getRandom, useTimeout } from '../../static/functions'

const Card = () => {
    const [shouldSmile, setSmile] = useState(false)
    const [shouldShowTyping, setShowTyping] = useState(false)
    const [random] = useState(getRandom(9))
    const [typings, setTypings] = useState({
        show: false,
        text: content.card__typings[0],
        pos: getRandom(9)
    })
    const timeouts = useRef({
        hide: null,
        show: null
    })

    useEffect(() => {
        document.title = content.titles.card
        setShowTyping(true)

        return () => {
            clearTimeout(timeouts.current.show)
            clearTimeout(timeouts.current.hide)
        }
    }, [])

    const goNextTyping = (counter) => {
        const newTyping = {
            text: content.card__typings[counter],
            pos: getRandom(9),
            show: true
        }
        const newCounter = counter + 1

        setTypings(newTyping)

        if (!content.card__typings[counter])
            return

        timeouts.current.hide = setTimeout(() => {
            setTypings({...newTyping,  show: false })
        }, manage.card__typings__hide_time)

        timeouts.current.show = setTimeout(() => {
            goNextTyping(newCounter)
        }, manage.card__typings__show_time)
    }

    useTimeout(() => {
        setShowTyping(false)
        goNextTyping(0)
    }, 1000)

    return  <section className="main">
                <div className="card">
                    <div className="card__cap">
                        <h1 className="card__title">
                            {content.card__title}
                        </h1>
                    </div>
                    <div className="card__body">
                        <div className="card__photo">
                            <Face
                                shouldSmile={shouldSmile}
                            />
                        </div>
                        <div className="card__info">
                            <Card__wr1 />
                            <Card__wr2
                                onMouseOver={() => setSmile(true)}
                                onMouseLeave={() => setSmile(false)}
                            />
                        </div>
                    </div>
                </div>

                <Typing
                    text={content.card__typing}
                    className={`card__typing card__out_typing card__out_typing-${random}`}
                    startDelay={manage.card__typing__show_time}
                    shouldShow={shouldShowTyping}
                />

                <Typing
                    text={typings.text}
                    className={`card__typing card__out_typing card__out_typing-${typings.pos}`}
                    shouldShow={typings.show}
                />
            </section>
}

export default Card
