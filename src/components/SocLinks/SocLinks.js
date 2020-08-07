import TelegramIcon from '../../media/images/TelegramIcon'
import TwitterIcon from '../../media/images/TwitterIcon'

const SocLinks = ({ onMouseOver, onMouseLeave }) => {
  	return 	<div className="soc_links">
                <a
                    onMouseOver={onMouseOver}
                    onMouseLeave={onMouseLeave}
                    href="https://t.me/BetterWebNews"
                    title="Follow the news in Telegram"
                    aria-label="link to Telegram"
                    rel="noreferrer"
                    target="_blank"
                    class="card__soc_link card__tel">
                    <TelegramIcon className="card__logo" />
                </a>
                <a
                    onMouseOver={onMouseOver}
                    onMouseLeave={onMouseLeave}
                    href="https://twitter.com/RomanistHere"
                    title="Follow the news on Twitter"
                    aria-label="link to Twitter"
                    rel="noreferrer"
                    target="_blank"
                    class="card__soc_link card__tw">
                    <TwitterIcon className="card__logo " />
                </a>
		    </div>
}

export default SocLinks
