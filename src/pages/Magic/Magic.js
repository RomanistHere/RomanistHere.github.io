import { useState, useEffect } from "preact/hooks"

import Typing from '../../components/Typing/Typing'
import LinkBack from '../../components/LinkBack/LinkBack'

import content from '../../static/content'

import './Magic.css'

const Magic = () => {
    const [isAllowed, allow] = useState(false)
    const [stats, setStats] = useState({
        cleanedArea: 0,
        numbOfItems: 0
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.title = 'Watch some magic'

            document.addEventListener('PopUpOFFStats', ({ detail }) => {
                setStats(detail)
                allow(true)
            })
        }
    }, [])

  	return 	isAllowed ?
            <section className="main magic">
                <p className="magic__text">
                    Total area of removed overlays is about {stats.cleanedArea.toFixed(1)} of your screen sizes
                </p>
                <p className="magic__text">
                    And total number of this popups, overlays and other elements is {stats.numbOfItems}
                </p>
                <LinkBack className="no_page__back" />
            </section> :
            <section className="main magic">
                <span className="main__no_acess">
                    You do not have acess to the magic... yet
                </span>
                <LinkBack className="no_page__back" />
            </section>
}

export default Magic
