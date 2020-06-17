import React from "react"

import content from '../../static/content'

const list = content.card__info.map((value, index) => {
    return  <li key={index} className="card__string">
                <span className="card__label">{value.card__label}</span>
                <span>{value.card__content}</span>
            </li>
})

const Card__wr1 = () => {
    return  <ul className="card__wr1">
               {list}
            </ul>
}

export default Card__wr1