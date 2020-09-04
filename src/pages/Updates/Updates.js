import { useEffect } from "preact/hooks"

import TextPage from '../../components/TextPage/TextPage'

import content from '../../static/content'

const Updates = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // document.title = content.upd__title
        }
    }, [])

  	return 	<TextPage
                title={content.upd__title}
                content={content.upd__content}
                // image={images[image].default}
                // posted={posted}
            />
}

export default Updates
