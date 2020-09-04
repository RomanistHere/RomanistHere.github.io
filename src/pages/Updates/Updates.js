import { useEffect } from "preact/hooks"

import TextPage from '../../components/TextPage/TextPage'

import updates from '../../static/updates'

const Updates = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.title = updates.title
        }
    }, [])

  	return 	<TextPage
                title={updates.upd__title}
                content={updates.upd__content}
                posted={updates.posted}
            />
}

export default Updates
