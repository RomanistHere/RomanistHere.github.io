import React, { useState, useEffect } from 'react'

import './Card.css'

import Face from '../../components/Face/Face'
import Preloader from '../../components/Preloader/Preloader'
import Card__wr1 from '../../components/Card__wr1/Card__wr1'
import Card__wr2 from '../../components/Card__wr2/Card__wr2'
import Typing from '../../components/Typing/Typing'

import content from '../../static/content'
import manage from '../../static/manage'
import { useTimeout } from '../../static/functions'

const Card = () => {
    const [shouldSmile, setSmile] = useState(false)
    const [shouldShowTyping, setShowTyping] = useState(false)
    const [showLoader, setLoader] = useState(
        JSON.parse(sessionStorage.getItem('showPreloader')) === false ? false : true)

    useEffect(() => {
        document.title = content.titles.card
        if (showLoader) {
            setTimeout(() => setLoader(false), 2500)
            sessionStorage.setItem('showPreloader', JSON.stringify(false))
        }

        setShowTyping(true)
    }, [])

    const getRandom = (numb) => 
        Math.floor(Math.random() * numb) + 1  

    return  showLoader ? 
    
            <section className="main">
                <Preloader />
            </section> :

            <section className="main">
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
                    className={`card__typing card__out_typing card__out_typing-${getRandom(4)}`}
                    startDelay={manage.card__typing__show_time}
                    shouldShow={shouldShowTyping}
                />
            </section>
}

export default Card