import { useEffect } from "preact/hooks"

import TextPage from '../../components/TextPage/TextPage'

import content from '../../static/content'


const Policy = () => {
    useEffect(() => {
        if (typeof window !== 'undefined')
        	document.title = content.titles.policy
    }, [])

  	return 	<TextPage
                title={content.policy__title}
                content={content.policy__content}
                posted={content.policy__posted}
            />
}

export default Policy
