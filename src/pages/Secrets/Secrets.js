import { useState, useEffect } from "preact/hooks"

import Typing from '../../components/Typing/Typing'
import LinkBack from '../../components/LinkBack/LinkBack'
import SecretsContent from '../../components/SecretsContent/SecretsContent'

import content from '../../static/content'
import manage from '../../static/manage'
import { secondsToHms } from '../../static/functions'

import './Secrets.css'

const Secrets = () => {
    const [isAllowed, allow] = useState(false)
    const [stats, setStats] = useState({
        cleanedArea: 0,
        numbOfItems: 0
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.title = `Let's see some secrets`
            // connect to PopUpOFF
            document.dispatchEvent(new CustomEvent('showPopUpOFFStats', { detail: 'letTheShowBegin' }))
            document.addEventListener('PopUpOFFStats', ({ detail }) => {
                setStats(detail)
                allow(true)
            })
        }
    }, [])

  	return 	<section className="main secrets">
                {
                    isAllowed ?

                    <SecretsContent stats={stats} /> :

                    <>
                        <Typing
                            text='There is nothing unusual about this page...'
                            className='secrets__no_acess secrets__typing'
                            startDelay={2000}
                            shouldShow={true}
                        />

                        <Typing
                            text='Unless you use PopUpOFF'
                            className='secrets__no_acess-2 secrets__typing'
                            startDelay={9000}
                            shouldShow={true}
                        />
                    </>
                }
                <span className="secrets__mob">
                    Visit from PC for an action
                </span>
                <LinkBack className="no_page__back" />
            </section>
}

export default Secrets
