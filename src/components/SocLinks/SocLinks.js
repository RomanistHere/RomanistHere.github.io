import TelegramIcon from '../../media/images/TelegramIcon'
import TwitterIcon from '../../media/images/TwitterIcon'

const SocLinks = ({ onMouseOver, onMouseLeave, shouldInherit = null, className = '' }) => {
    const iconClassToInh = shouldInherit ? `${shouldInherit}__logo` : ''
    const linkClassToInh = shouldInherit ? `${shouldInherit}__soc_link` : ''

  	return 	<div className={`${className} soc_links`}>
                <a
                    onMouseOver={onMouseOver}
                    onMouseLeave={onMouseLeave}
                    href="https://t.me/BetterWebNews"
                    title="Follow the news in Telegram"
                    aria-label="link to Telegram"
                    rel="noreferrer"
                    target="_blank"
                    class={`soc_links__link ${linkClassToInh}`}>
                    <TelegramIcon className={iconClassToInh} />
                </a>
                <a
                    onMouseOver={onMouseOver}
                    onMouseLeave={onMouseLeave}
                    href="https://twitter.com/RomanistHere"
                    title="Follow the news on Twitter"
                    aria-label="link to Twitter"
                    rel="noreferrer"
                    target="_blank"
                    class={`soc_links__link ${linkClassToInh}`}>
                    <TwitterIcon className={iconClassToInh} />
                </a>
		    </div>
}

export default SocLinks
