import { useEffect } from "preact/hooks"

import TextPage from '../../components/TextPage/TextPage'

import updates from '../../static/updates'
import { querySelectorAll } from '../../static/functions'

const Updates = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.title = updates.title
            const optPageLinks = [...querySelectorAll('optPage')]
            optPageLinks.map(item =>
                item.addEventListener('click', e => {
    				e.preventDefault()
    				const event = new Event("openOptPage")
    	  			document.dispatchEvent(event)
    			})
            )

        }
    }, [])

  	return 	<TextPage
                title={updates.upd__title}
                content={updates.upd__content}
                posted={updates.posted}
            />
}

export default Updates
