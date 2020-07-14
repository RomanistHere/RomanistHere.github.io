import React, { useState, useEffect } from 'react'

import './Card.css'

import Face from '../Face/Face'
// import Preloader from '../Preloader/Preloader'
import Card__wr1 from '../Card__wr1/Card__wr1'
import Card__wr2 from '../Card__wr2/Card__wr2'

import content from '../../static/content'

const Card = () => {
    const [shouldSmile, setSmile] = useState(false)
    // const [showLoader, setLoader] = useState(true)

    useEffect(() => {
        document.title = content.titles.card
        // setLoader(false)
    }, [])

    // return  showLoader ? 
    
    //         <section className="main">
    //             <Preloader />
    //         </section> :

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
            </section>
}

export default Card