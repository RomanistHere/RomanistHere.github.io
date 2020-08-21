import { useState, useEffect } from "preact/hooks"

import content from '../../static/content'
import manage from '../../static/manage'
import { secondsToHms } from '../../static/functions'

const setText = (ratio, key) => {
    const text = {
        less: `the size of`,
        equal: `almost like the size of`,
        more: `times bigger than the size of`,
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
    try {
        const { areaData } = manage
        const { size, value } = areaData[numb]
        const text = getText(val, size)
        const fullText = text ? `${text} ${value}` : getArea(val, numb + 1)
        return fullText
    } catch (e) {
        return `almost nothing`
    }
}

const animateValue = (start, finish, duration, useHook) => {
    const end = Math.floor(finish)
    const range = end - start
    const minTimer = 50
    const stepTime = Math.abs(Math.floor(duration / range))
    const newStepTime = Math.max(stepTime, minTimer)
    const startTime = new Date().getTime()
    const endTime = startTime + duration
    let timer

    const run = () => {
        const now = new Date().getTime()
        const remaining = Math.max((endTime - now) / duration, 0)
        const value = Math.round(end - (remaining * range))
        useHook(value)
        if (value === end) {
            clearInterval(timer)
            useHook(finish)
        }
    }

    timer = setInterval(run, newStepTime)
    run()

    return timer
}

const SecretsContent = ({ stats }) => {
    const { cleanedArea, numbOfItems } = stats
    const time = secondsToHms(cleanedArea * 1.32)
    const averageScreenArea = 0.12
    const areaInMetres = cleanedArea * averageScreenArea
    const sqMetresToFt = 10.764
    const areaInFt = areaInMetres * sqMetresToFt

    const [count1, setCount1] = useState(cleanedArea)
    const [count2, setCount2] = useState(numbOfItems)
    const [count3, setCount3] = useState(areaInMetres)

    useEffect(() => {
        setCount1(cleanedArea)
        setCount2(numbOfItems)
        setCount3(areaInMetres)
    }, [stats])

    useEffect(() => {
        const timer1 = animateValue(0, count1, 3000, setCount1)
        const timer2 = animateValue(0, count2, 3000, setCount2)
        const timer3 = animateValue(0, count3, 3000, setCount3)

        return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
            clearTimeout(timer3)
        }
    }, [])

    return  <main className="secrets_wr">
                <div className="secrets__start"></div>
                <article className="secrets__info">
                    <h1 className="secrets__header">Total numbers:</h1>
                    <p className="secrets__text secrets__text-1">
                        Area of removed overlays is about
                        {' '}
                        <span className="secrets__note secrets__note-1">{count1.toFixed(1)}</span>
                        {' '}
                        of your screen sizes.
                    </p>
                    <p className="secrets__text secrets__text-2">
                        And the number of these popups, overlays and other elements is
                        {' '}
                        <span className="secrets__note secrets__note-3">{count2}</span>.
                    </p>
                    <p className="secrets__text secrets__text-3">
                        Saved time: {time ? time : '0 seconds'}.
                    </p>
                    <p className="secrets__text secrets__text-4">
                        Approximate cleared area is
                        {' '}
                        <span className="secrets__note secrets__note-2">{count3.toFixed(1)}</span>
                        {' '}
                        square metres or {areaInFt.toFixed(1)} square feet.
                    </p>
                    <p className="secrets__text secrets__text-5">
                        It's {getArea(areaInMetres)}.
                    </p>
                    <span className="secrets__caption">Noone else can see your stats</span>
                </article>
            </main>
}

export default SecretsContent
