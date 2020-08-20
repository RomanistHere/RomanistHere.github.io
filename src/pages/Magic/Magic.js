import { useState, useEffect } from "preact/hooks"

import Typing from '../../components/Typing/Typing'
import LinkBack from '../../components/LinkBack/LinkBack'
import MagicContent from '../../components/MagicContent/MagicContent'

import content from '../../static/content'
import manage from '../../static/manage'
import { secondsToHms } from '../../static/functions'

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
                    <MagicContent stats={stats} /> :
                    <span className="main__no_acess">
                        You do not have acess to the magic... yet
                    </span>
                }
                <LinkBack className="no_page__back" />
            </section>
}

export default Magic
