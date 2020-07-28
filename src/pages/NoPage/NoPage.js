import content from '../../static/content'

import LinkBack from '../../components/LinkBack/LinkBack'

import './NoPage.css'

const NoPage = () => {
  	return 	<section className="main no_page">
                <span className="no_page__text">{content.no_page__text}</span>
                <LinkBack className="no_page__back" />
		    </section>
}

export default NoPage
