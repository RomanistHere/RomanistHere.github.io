const content = {
	'card__title': 'Contact ID',
	'card__info': [
		{
			'card__label': 'name: ',
			'card__content': 'Roman Smunyov'
		},
		{
			'card__label': 'location: ',
			'card__content': 'Minsk, Belarus'
		},
		{
			'card__label': 'position: ',
			'card__content': 'JavaScript developer'
		}
	],
	'form__info': [
		{
			'isInput': true,
			'form__lbl': 'Position',
			'placeholder': 'Front-end developer',
			'form__mess': ' - unlikely:('
		},
		{
			'isInput': true,
			'form__lbl': 'Where',
			'placeholder': 'Norway, Oslo. Onsite',
			'form__mess': ' - маловероятно)'
		},
		{
			'isInput': true,
			'form__lbl': 'Salary',
			'placeholder': '5 000 - 7 000 USD',
			'form__mess': ' - meh, too low:('
		},
		{
			'isInput': false,
			'form__lbl': 'Project',
			'placeholder': 'Web app in sphere of healthcare. Team is 30 person big...',
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
	'form__mess': ' - Field is almost empty',
	'mehWords': {
		'Where': ['belarus', 'russia', 'ukraine', 'бела', 'россия', 'укра', 'minsk', 'минск'],
		'Position': ['back', 'бэк'],
		'Salary': ['1000', '2000', '1500', '2500'],
	},
	'formAction': 'https://formspree.io/xdowzzgv',
	'offer__title': 'Summary',
	'offer__list': [
		{
			'offer__low_title': 'Who am I',
			'offer__text': `I'm a front-end developer with over 4.5 years of experience. In case this text is not up-to-date there is <a href="#" rel="noreferrer" target="_blank" class="link">a link</a> for my CV.`
		},
		{
			'offer__low_title': 'What am I good at',
			'offer__text': `I like things to be beautiful. And I think I have a feeling of it. This site and all of my projects were designed by me both for how-it-looks and how-it-works parts. 
				<br>
				</br>
				From technical side, I do really like JavaScript. There are a lot of good frameworks I am good with, like Angular or React, but I like plain JS most. I still care about semantics - you can always check it in <a href="https://github.com/Romanisthere" rel="noreferrer" target="_blank" class="link">my Git</a>. I've got a feeling about Web Components and functional programming - I learn it in my spare time. Most complete stack of technologies I know how to use is in <a href="#" rel="noreferrer" target="_blank" class="link">the CV</a>.`
		},
		{
			'offer__low_title': 'What do I do now',
			'offer__text': `I learn functional programming using JS and Elm, design, develop and promote my products and contribute to some other projects.`
		},
		{
			'offer__low_title': 'What am I seeking for',
			'offer__text': `I would like to apply and improve my knowledges in functional programming, so I'd join the place where it matters. I also plan to relocate to an English speaking country in near future. So I am considering onsite or remote positions with opportunity to relocate.`
		},
		{
			'offer__low_title': 'How to reach me',
			'offer__text': `If you want to show me some good-looking position, the best way is to fill special form just below. Otherwise try this: <a href="https://www.linkedin.com/in/romanist/"  rel="noreferrer" target="_blank" class="link">LinkedIn</a>, <a href="mailto:smilemoon@yandex.ru"  rel="noreferrer" target="_blank" class="link">Email</a>, <a href="https://join.skype.com/invite/o2l5a5Qb2YWn"  rel="noreferrer" target="_blank" class="link">Skype</a>.`
		}
	],
	'offer__nav': [
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
		{
			'text': 'Back',
			'link': '/',
			'comp': 'Back'
		},
	]
}

export default content
