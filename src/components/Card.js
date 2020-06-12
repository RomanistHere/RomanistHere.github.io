import React from 'react'

import Face from './Face'
import Card__wr1 from './Card__wr1'
import Card__wr2 from './Card__wr2'

import content from '../static/content'

const Card = () => {
    return  <section className="main">
                <div className="card">
                    <div className="card__cap">
                        <h1 className="card__title">
                            {content.card__title}
                        </h1>
                    </div>
                    <div className="card__body">
                        <div className="card__photo">
                            <Face />
                        </div>
                        <div className="card__info">
                            <Card__wr1 />
                            <Card__wr2 />
                        </div>
                    </div>
                </div>
            </section>
}

export default Card