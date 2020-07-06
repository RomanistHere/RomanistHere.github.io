const content = {
	'card__title': 'Contact Me',
	'card__info': [
		{
			'card__label': 'name: ',
			'card__content': 'Roman Smunyov'
		},
		{
			'card__label': 'pseudonym: ',
			'card__content': 'RomanistHere'
		},
		{
			'card__label': 'location: ',
			'card__content': 'Minsk, Belarus'
		},
		{
			'card__label': 'profession: ',
			'card__content': 'JavaScript developer'
		}
	],
	'form__info': [
		{
			'isInput': true,
			'form__lbl': 'Position',
			'placeholder': 'Front-end developer',
			'form__mess': ' unlikely:('
		},
		{
			'isInput': true,
			'form__lbl': 'Where',
			'placeholder': 'Norway, Oslo. Onsite',
			'form__mess': ' маловероятно)'
		},
		{
			'isInput': true,
			'form__lbl': 'Salary',
			'placeholder': '5 000 - 7 000 USD Gross monthly',
			'form__mess': `that's too low:(`
		},
		{
			'isInput': false,
			'form__lbl': 'Project',
			'placeholder': 'Web app in the sphere of healthcare. Team is 30 person big...',
		},
		{
			'isInput': false,
			'form__lbl': 'Stack',
			'placeholder': 'React + Redux, TypeScript...',
		},
		{
			'isInput': false,
			'form__lbl': 'Responsibilities',
			'placeholder': 'Writing some code...',
		},
		{
			'isInput': false,
			'form__lbl': 'Contacts',
			'placeholder': 'Contact me back via email: example@gmal.com or LinkedIn...',
		},
	],
	'form__mess': ' This field is almost empty',
	'mehWords': {
		'Where': ['belarus', 'russia', 'ukraine', 'бела', 'россия', 'укра', 'minsk', 'минск'],
		'Position': ['back', 'бэк', 'full', 'фул'],
		'Salary': ['1000', '2000', '1500', '2500'],
	},
	'formAction': 'https://formspree.io/xdowzzgv',
	'form__typings': [
		'Best way to fill would be like in example',
		'You can jump to the next field by pressing tab',
		'And return by pressing shift + tab',
		'It works for every website',
		'You can pull and stretch it here to expand :)',
	],
	'offer__title': 'Summary',
	'offer__list': [
		{
			'offer__low_title': 'Who am I',
			'offer__text': `I'm <span class="offer__word">a front-end developer</span> with over <span class="offer__word">4.5 years of experience and bachelor's in math</span>. In case this text is not up-to-date there is <a href="#" rel="noreferrer" target="_blank" class="link">a link</a> for my CV.`
		},
		{
			'offer__low_title': 'What am I good at',
			'offer__text': `I like things to be beautiful. And I think I have a feeling of it. This site and all of my projects were designed by me both for how-it-looks and how-it-works parts. 
				<br>
				</br>
				From the technical side, I do really like <span class="offer__word">JavaScript</span>. There are a lot of good frameworks I am good with, like <span class="offer__word">Angular or React</span>, but I like plain JS most. I had a lot of projects with <span class="offer__word">WebGL and Three.js - browser, mobile and desktop apps, games</span>. My <span class="offer__word">CSS3 and HTML5</span> are strong. I still care about <span class="offer__word">semantics</span> - you can always check it in <a href="https://github.com/Romanisthere" rel="noreferrer" target="_blank" class="link">my Git</a>. I've got a feeling about <span class="offer__word">Web Components and functional programming</span> - I learn it in my spare time. Most complete stack of technologies I know how to use is in <a href="#" rel="noreferrer" target="_blank" class="link">the CV</a>.`
		},
		{
			'offer__low_title': 'What do I do now',
			'offer__text': `I learn functional programming using <span class="offer__word">JS and Elm</span>, design, develop and promote <span class="offer__word">my products and contribute</span> to some other projects.`
		},
		{
			'offer__low_title': 'What am I seeking for',
			'offer__text': `I would like to apply and improve my knowledge in <span class="offer__word">functional programming</span>, so I'd join the place where it matters. I also <span class="offer__word">plan to relocate</span> to an English speaking country in near future. So I am considering <span class="offer__word">onsite or remote positions</span> with the opportunity to relocate.`
		},
		{
			'offer__low_title': 'How to reach me',
			'offer__text': `If you want to show me some good-looking positions, the best way would be to fill <span class="offer__word">the special form</span> just below. Otherwise try this: <a href="https://www.linkedin.com/in/romanist/"  rel="noreferrer" target="_blank" class="link">LinkedIn</a>, <a href="mailto:smilemoon@yandex.ru"  rel="noreferrer" target="_blank" class="link">Email</a>, <a href="https://join.skype.com/invite/o2l5a5Qb2YWn"  rel="noreferrer" target="_blank" class="link">Skype</a>.`
		}
	],
	'offer__nav': [
		{
			'text': 'Back',
			'link': '/',
			'comp': 'Back'
		},
		{
			'text': 'Open CV',
			'link': '',
			'comp': 'CV'
		},
		{
			'text': 'Try the form',
			'link': '/form',
			'comp': 'Form'
		},
		{
			'text': 'See the projects',
			'link': '/apps',
			'comp': 'Projects'
		},
	],
	'offer__typing': 'You can disable highlighting of key words here ↓',
}

export default content
