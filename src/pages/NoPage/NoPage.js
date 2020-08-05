import { useEffect } from "preact/hooks"

import content from '../../static/content'

import LinkBack from '../../components/LinkBack/LinkBack'

import './NoPage.css'

const NoPage = () => {
    useEffect(() => {
		if (typeof window !== 'undefined')
	        document.title = content.titles.noPage
    }, [])

  	return 	<section className="main no_page">
                <span className="no_page__text">{content.no_page__text}</span>
                <LinkBack className="no_page__back" />
		    </section>
}

export default NoPage
