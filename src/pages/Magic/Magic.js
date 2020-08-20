import { useState, useEffect } from "preact/hooks"

import Typing from '../../components/Typing/Typing'
import LinkBack from '../../components/LinkBack/LinkBack'

import content from '../../static/content'
import manage from '../../static/manage'
import { secondsToHms } from '../../static/functions'

import './Magic.css'

const setText = (ratio, key) => {
    const text = {
        less: `the size of`,
        equal: `is almost like`,
        more: `times bigger then the size of`,
    }

    return key === 'equal' ? text[key] : `${ratio.toFixed(1)} ${text[key]}`
}

const getText = (val, size) => {
    const ratio = val/size
    const equality =
        ((ratio <= 1.1) && (ratio >= .9)) ? 'equal' :
        ((ratio < .9) && (ratio >= .4)) ? 'less' :
        ((ratio > 1.1) && (ratio <= 1.6)) ? 'more' :
        (ratio <= .3) ? 'less' :
        null
    const caption = equality ? setText(ratio, equality) : false

    return caption
}

const getArea = (val, numb = 1) => {
    const { areaData } = manage
    try {
        const { size, value } = areaData[numb]
        const text = getText(val, size)
        const fullText = text ? `${text} ${value}` : getArea(val, numb + 1)
        return fullText
    } catch (e) {
        return `It's almost nothing`
    }
}

const MagicContent = ({ cleanedArea, numbOfItems }) => {
    // cleanedArea = .5
    const time = secondsToHms(cleanedArea * 1.32)
    const averageScreenArea = 0.12
    const areaInMetres = cleanedArea * averageScreenArea
    const sqMetresToFt = 10.764
    const areaInFt = areaInMetres * sqMetresToFt
    return <>
        <p className="magic__text">
            Total area of removed overlays is about {cleanedArea.toFixed(1)} of your screen sizes
        </p>
        <p className="magic__text">
            And total number of this popups, overlays and other elements is {numbOfItems}
        </p>
        <p className="magic__text">
            Saved time: {time ? time : '0 seconds'}
        </p>
        <p className="magic__text">
            Area in square metres: {areaInMetres.toFixed(1)} or {areaInFt.toFixed(1)} square feet
        </p>
        <p className="magic__text">
            {getArea(areaInMetres)}
        </p>
    </>
}

const Magic = () => {
    const [isAllowed, allow] = useState(false)
    const [stats, setStats] = useState({
        cleanedArea: 0,
        numbOfItems: 0
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.title = 'Watch some magic'
            // connect to PopUpOFF
            document.dispatchEvent(new CustomEvent('showPopUpOFFStats', { detail: 'letTheShowBegin' }))
            document.addEventListener('PopUpOFFStats', ({ detail }) => {
                setStats(detail)
                allow(true)
            })
        }
    }, [])

  	return 	<section className="main magic">
                {
                    isAllowed ?
                    MagicContent(stats) :
                    <span className="main__no_acess">
                        You do not have acess to the magic... yet
                    </span>
                }
                <LinkBack className="no_page__back" />
            </section>
}

export default Magic
