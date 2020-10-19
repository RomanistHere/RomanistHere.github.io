import './Arrow.css'

const Arrow = ({ text, className }) => {
  	return 	<div class={`${className} arrow`}>
                <div class="arrow__chevron"></div>
                <div class="arrow__chevron"></div>
                <div class="arrow__chevron"></div>
                <span class="arrow__text">{text}</span>
            </div>
}

export default Arrow
