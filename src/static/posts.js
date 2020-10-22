// Legend:

// {
// 	title: ``,
// 	slug: ``,
//  posted: ``,
//	desc: ``,
// 	image: ``,
// 	content: ``
// }

// <a href="https://twitter.com/RomanistHere"  rel="noreferrer" target="_blank" class="link">
// <strong class="article__col-4">
// <span class="article__col-3">
// <span class="article__col-2">
// <span class="article__col-1">
// <ul class="article__list article__text">
//		<li class="article__list_item">
//		</li>
//	</ul>
// <p class="article__text">
// <a class="link optPage" href="#">the options page</a>
// <div class="article__img_wr article__img_wr-header">
//	<img
//		src="../../../assets/inline/brave.jpg"
//		class="article__img_small article__img_small-full_width"
//		alt="my brave stats for about 50 days"
//		title="my brave stats for about 50 days"
//		loading="lazy">
//  </div>
const posts = [
	{
		title: `Plausible vs GA vs Matomo. Part I.`,
		slug: `analytics-one`,
		posted: `Oct 15, 2020`,
		tags: ['dev'],
		desc: `Comaprsion of the most popular analytics before I remove it. Data.`,
		image: `analytics.jpg`,
		imageLink: `/assets/posts/analytics_full.jpg`,
		content: `
			<p class="article__text">Click the image above to see the infographic.</p>

			<h3 class="article__subtitle part1">Prehistory</h3>

			<p class="article__text"><a href="https://romanisthere.github.io/PopUpOFF-Website/index.html"  rel="noreferrer" target="_blank" class="link">Website I have this analytics on</a> is not the easiest target. Users get forwarded there right after the installation of PopUpOFF. And some guys (bots) are known to reinstall my extension programmatically. Let's see how our analytics will treat them.</p>

			<p class="article__text">There are 6 full days considered. I won't promise it's real data, but it's <s>plausible</s><strong class="article__col-4">accurate for our needs</strong>. And our needs are:</p>

			<ul class="article__list article__text">
				<li class="article__list_item">
					to check the adequacy;
				</li>
				<li class="article__list_item">
					to compare accuracy;
				</li>
				<li class="article__list_item">
					to see how untrackable different browsers are;
				</li>
				<li class="article__list_item">
					to pick the best one;
				</li>
			</ul>

			<h3 class="article__subtitle part2">Visits</h3>

			<p class="article__text"><strong class="article__col-4">Unique visitors</strong>. Different services detect "unique" in different ways. We can never know the real data, but GA looks like the weakest here, sorry Google.</p>

			<p class="article__text"><strong class="article__col-4">Total pageviews</strong>. Let the fun begin. Plausible seemed good in unique visitors, but this one is "not plausible"(c). By the data we have we can say that Matomo and GA are very similar in this case. My logic tells me that they handle bots better.</p>

			<p class="article__text"><strong class="article__col-4">Visit duration. Matomo and GA are ridiculous</strong>. Bounce rate was nonsense, so I just skipped it. <strong class="article__col-4">Plausible seems like the strong leader here</strong>. What's next?</p>

			<h3 class="article__subtitle part3">Installs</h3>

			<div class="article__img_wr article__img_wr-header">
	            <img
	                src="../../../assets/inline/analytic_browsers.jpg"
	                class="article__img_small article__img_small-full_width"
					alt="Install events"
	                title="Install events"
	                loading="lazy">
	        </div>

			<p class="article__text">It's the data for all 6 days together. "From stores" is supposed to be equal to the total number of events. It's the number I get from Google store itself, for example. Edge doesn't provide any<s>thing</s> data. There are few interesting points:</p>

			<ul class="article__list article__text">
				<li class="article__list_item">
					Plausible catched not a lot of unique Chrome installs. Unexpectedly bad.
				</li>
				<li class="article__list_item">
					Firefox <a href="https://www.searchenginejournal.com/google-analytics-is-blocked-by-firefox-mozilla-explains-why/311471/"  rel="noreferrer" target="_blank" class="link">blocks only GA</a>, <strong class="article__col-4">does it bad</strong>, though.
				</li>
				<li class="article__list_item">
					Opera users are the <strong class="article__col-4">most uncatchable</strong> here. Good for them.
				</li>
				<li class="article__list_item">
					Google store's stats look not accurate:(
				</li>
			</ul>

			<p class="article__text">Results are similar. Though Plausible has disappointed me a bit. Let's see the last category, shall we?</p>

			<h3 class="article__subtitle part4">Page events</h3>

			<div class="article__img_wr article__img_wr-header">
	            <img
	                src="../../../assets/inline/analytic_events.jpg"
	                class="article__img_small article__img_small-full_width"
					alt="Page events"
	                title="Page events"
	                loading="lazy">
	        </div>

			<p class="article__text">Results look the same. GA is, as expected, behind - any <a href="https://duckduckgo.com/app" rel="noreferrer" target="_blank" class="link">privacy tool</a> <strong class="article__col-4">can block it</strong> nowadays. Plausible got a little bit more, assuming Matomo shows only total numbers, not unique.</p>

			<h3 class="article__subtitle part5">Conclusion</h3>

			<p class="article__text"><strong class="article__col-4">Any tool will give you an average understanding</strong> of what's happening with your app or website. Most of the <a href="https://www.csoonline.com/article/2975193/9-steps-completely-anonymous-online.html"  rel="noreferrer" target="_blank" class="link">I-am-anonymous</a> guys are going to be uncaught by all the tracking services anyway. Plausible, as I see it, will give you more accurate data.</p>

			<p class="article__text">There is a second part coming. Technical, UX and UI comparison.</p>

			<h3 class="article__subtitle part6">P.S.</h3>

			<p class="article__text">I'm using <a href="https://brave.com/"  rel="noreferrer" target="_blank" class="link">Brave</a> browser. <strong class="article__col-4">Haven't been tracked yet</strong>. Hello to all Firefox users:)</p>
		`
	},{
		title: `Why is «blacklist» bad?`,
		slug: `blacklist`,
		posted: `Sep 24, 2020`,
		tags: ['other'],
		desc: `Google, Microsoft and Twitter don't want to use this word anymore. What's the problem with it?`,
		image: `black.jpg`,
		content: `
			<p class="article__text"><a href="https://en.wikipedia.org/wiki/Simulacra_and_Simulation#Summary"  rel="noreferrer" target="_blank" class="link">Baudrillard claims</a> that our current <strong class="article__col-4">society has replaced all reality and meaning with symbols and signs, and that human experience is a simulation of reality</strong>. How is it connected with "blacklist" and why <a href="https://tech.hindustantimes.com/tech/news/after-google-s-chrome-microsoft-s-github-to-replace-slave-master-references-with-neutral-terms-71592189721415.html"  rel="noreferrer" target="_blank" class="link">it's not good to use this word anymore</a>?</p>

			<h3 class="article__subtitle part1">Let's define word “black” as an example</h3>

			<p class="article__text"><a href="https://en.wikipedia.org/wiki/Black"  rel="noreferrer" target="_blank" class="link">Wikipedia</a>: “black is the darkest color, the result of the absence or complete absorption of visible light.”</p>

			<p class="article__text"><a href="https://www.dictionary.com/browse/black"  rel="noreferrer" target="_blank" class="link">Dictionary.com</a>: “being a color that lacks hue and brightness and absorbs light without reflecting any of the rays composing it”</p>

			<p class="article__text"><a href="https://www.colormatters.com/color-and-design/are-black-and-white-colors"  rel="noreferrer" target="_blank" class="link">Physics</a>: <strong class="article__col-4">black means no light</strong>. That’s why if we went in a larder and shut the door, all we would see is blackness.</p>

			<p class="article__text">White color is the opposite - it is all the colors, all the light.</p>

			<div class="article__img_wr article__img_wr-header">
	            <img
	                src="../../../assets/inline/universe.jpg"
	                class="article__img_small article__img_small-full_width"
					alt="Light means action"
	                title="Light means action"
	                loading="lazy">
	        </div>

			<h3 class="article__subtitle part1">Symbolism</h3>

			<p class="article__text">In terms of symbols <strong class="article__col-4">light (color) means life</strong>. And life points us to action. Black color means no actions then. It is exactly how our Universe works. So something in blacklist is supposed to have no action. And the whitelist is… I hope you got my idea.</p>

			<p class="article__text">Do you see any racism in physics and philosophy? What is it all about then?</p>

			<h3 class="article__subtitle part1">Symbols and signs</h3>

			<p class="article__text">The thing is that <strong class="article__col-4">we can put any value into any object or word</strong>. We can do it on a local level - like some family traditions - or as society. Let’s get back to our example.</p>

			<p class="article__text"><strong class="article__col-4">The moment we start to care whether we should use the word “black” or not - it is the moment we create racism</strong>. We add a new layer of meaning to the word that is to obscure everything it meant before. Literally displace it.</p>

			<h3 class="article__subtitle part1">Philosophy</h3>


			<p class="article__text">If you don’t agree with the previous paragraph or don’t understand why, let me show you a little example. There is a thing like desecration. It could mean that some guy tells (or shows) a group of people that their sacred thing is not that sacred in the most disrespectful way. For example <a href="https://www.google.com/search?q=desecrating+the+flag&newwindow=1&tbm=isch"  rel="noreferrer" target="_blank" class="link">burning the flag</a>. <strong class="article__col-4">By doing so, one accepts that it has value</strong>. No one will publicly and disrespectfully burn something valueless. So <strong class="article__col-4">an act of desecration is an act of both acceptance and sacralizing</strong>.</p>

			<div class="article__img_wr article__img_wr-header">
	            <img
	                src="../../../assets/inline/memorial.jpg"
	                class="article__img_small article__img_small-full_width"
					alt="Act of desecration is an act of sacralizing"
	                title="Act of desecration is an act of sacralizing"
	                loading="lazy">
	        </div>

			<p class="article__text">Almost exactly the same is going on with our topic example. <strong class="article__col-4">By not using the word “black” consciously we make racism exist. By telling that something is not racist we spawn and accept racism.</strong></p>

			<h3 class="article__subtitle part1">What is the problem?</h3>

			<p class="article__text">There are two, actually, as I see it. <strong class="article__col-4">Racism is just a symbol</strong> here. And we are constantly replacing meaning with symbols and signs.</p>

			<p class="article__text">Imagine the world, where everything we discuss, everything we do has sense. We are not afraid of using any words, moves, colors, e.t.c. Everything around us: mass media, people, art, objects - has its own meaning, value. They do not just point to something (<a href="https://en.wikipedia.org/wiki/Simulacrum#Philosophy"  rel="noreferrer" target="_blank" class="link">or to nothing at all</a>). Imagined? Our world is going in the exact opposite direction.</p>

			<p class="article__text">And secondly, does it not sound <a href="https://en.wikipedia.org/wiki/Newspeak#Principles"  rel="noreferrer" target="_blank" class="link">a little bit familiar</a> to you? Don’t you think we will be better without the word “black”? Shouldn’t we <a href="https://en.wikipedia.org/wiki/Newspeak"  rel="noreferrer" target="_blank" class="link">add a new word</a>, “nolight”, for example, and use it to describe black color? George Orwell <a href="https://en.wikipedia.org/wiki/Nineteen_Eighty-Four"  rel="noreferrer" target="_blank" class="link">would approve</a>:)</p>

			<p class="article__text">It <a href="https://minimalism.life/journal/too-many-screens"  rel="noreferrer" target="_blank" class="link">is ridiculous</a> now to think that one day we won't be able to have a black cat or dog. But, as society, <strong class="article__col-4">we're doing our baby steps towards it</strong>.</p>

			<div class="article__img_wr article__img_wr-header">
	            <img
	                src="../../../assets/inline/bicolor.jpg"
	                class="article__img_small article__img_small-full_width"
					alt="It is ridiculous to imagine, isn't it?"
	                title="It is ridiculous to imagine, isn't it?"
	                loading="lazy">
	        </div>

			<p class="article__text">Thank you for attention and have a great life now. See ya!</p>
		`
	},{
		title: `I removed Google Analytics. Why?`,
		slug: `google-analytics`,
		posted: `Sep 21, 2020`,
		tags: ['dev'],
		desc: `Google Analytics is a first thing that comes to mind when you think about tracking your app or webpage. It’s free, big, and it’s used ubiquitously. It comes with the Google quality. Where is the fallback?`,
		image: `google_privacy.jpg`,
		imageLink: `https://policies.google.com/privacy`,
		content: `
			<p class="article__text">First things first. Most important for me is:</p>

			<h3 class="article__subtitle part1">Our privacy</h3>

			<p class="article__text">Google Analytics is a first thing that comes to mind when you think about tracking your app or webpage. It’s free, big, and it’s used ubiquitously. It comes with the Google quality. Where is the fallback?</p>

			<p class="article__text">Google is <a href="https://plausible.io/blog/remove-google-analytics#its-owned-by-google-the-largest-ad-tech-company-in-the-world" rel="noreferrer" target="_blank" class="link">the largest ad-tech company in the world</a>, so it constantly <a href="https://deletegoogle.com/#privacyForSale"  rel="noreferrer" target="_blank" class="link">sells our data</a>. While you could use it to understand how your users use the application, Google might use it differently. There is no way to know how, but <strong class="article__col-4">Google asks you to trust</strong>. <a href="https://en.wikipedia.org/wiki/Privacy_concerns_regarding_Google"  rel="noreferrer" target="_blank" class="link">We can only guess...</a></p>

			<p class="article__text">I could be trusting it with my data (I do not though). But not yours. So there will be no Google Analytics in my products again. Sorry Google.</p>

			<p class="article__text">There is also some amount of technical stuff to be considered:</p>

			<h3 class="article__subtitle part2">It slows down the speed</h3>

			<p class="article__text">Because of "<strong class="article__col-4">more than 53% of all sites</strong> on the web track their visitors using Google Analytics", it's usually cached, but anyway there are always requests between your page and the server. And any new data has to be processed. Downloaded code is also packed with the features, most site-owners will never use.</p>

			<h3 class="article__subtitle part2">Not so efficient</h3>

			<p class="article__text">Due to its ubiquity, a lot of tracking-blocking systems simply are <strong class="article__col-4">not allowing Google to collect</strong> any data from the users.</p>

			<h3 class="article__subtitle part3">Some ending words</h3>

			<p class="article__text">But if you can't afford yourself to buy a server or a good paid analytic tool, there are not a lot of choices:</p>

			<ul class="article__list article__text">
				<li class="article__list_item">
					<strong class="article__col-4">No tracking</strong>. This website has none, for example.
				</li>
				<li class="article__list_item">
					Ask some <s>strangers</s>friends <strong class="article__col-4">to host one of the <a href="https://matomo.org/docs/installation/"  rel="noreferrer" target="_blank" class="link">open-sourced</a> solutions</strong>.
				</li>
				<li class="article__list_item">
					You can try to keep <a href="https://plausible.io/register"  rel="noreferrer" target="_blank" class="link">trialling</a> some analytic tools. I'm not sure if it's going to work though.
				</li>
				<li class="article__list_item">
					And <s>Yandex</s>Google Analytics.
				</li>
			</ul>

			<p class="article__text">As you can see, sometimes you don't have much choice. There is an important note to understand: <strong class="article__col-4">it's not bad to use GA in your product - nothing is completely bad - but if you want to live in a better world, think about what matters to you and what might to your users</strong>.</p>

			<p class="article__text">There is still a lot of info I haven't covered in this article. <a href="https://plausible.io/blog/remove-google-analytics#its-a-liability-considering-gdpr-ccpa-and-other-privacy-regulations"  rel="noreferrer" target="_blank" class="link">About policies</a>, for example. It's because it doesn't matter to me so much. But I left a lot of links, so you will find your way around here.</p>

			<p class="article__text">Thank you for attention and have a great life now. See ya!</p>
		`
	},{
		title: `Chrome Extension “Receiving end does not exist.”`,
		slug: `receiving-end`,
		posted: `Sep 14, 2020`,
		tags: ['dev'],
		desc: `You must have faced such an error if you ever developed an extension.`,
		image: `receiving.jpg`,
		content: `
			<p class="article__text">I have personally spent a tremendous amount of time investigating this problem. Let's see why it's trickier than it seems like.</p>

			<p class="article__text">There are actually <strong class="article__col-4">three main points</strong> what could go wrong if you're facing this problem with your extensions:</p>

			<h3 class="article__subtitle part1">Not following the official API</h3>

			<p class="article__text">Google writes pretty decent tutorials and explanations, so I won't be copywriting it. <strong class="article__col-4"><a href="https://developer.chrome.com/extensions/messaging"  rel="noreferrer" target="_blank" class="link">This article</a> is a great showcase</strong> of what and in what cases you should be doing to make a chat between your scripts. The hints:</p>

			<ul class="article__list article__text">
				<li class="article__list_item">
					<a href="https://developer.chrome.com/extensions/runtime#method-sendMessage"  rel="noreferrer" target="_blank" class="link">How to send a message</a> (sendMessage). <a href="https://github.com/RomanistHere/PopUpOFF/blob/develop/content/content.js#L62"  rel="noreferrer" target="_blank" class="link">Live example</a> in PopUpOFF content script.
				</li>
				<li class="article__list_item">
					<a href="https://developer.chrome.com/extensions/runtime#event-onMessage"  rel="noreferrer" target="_blank" class="link">How to handle it</a> - get and process (onMessage). <a href="https://github.com/RomanistHere/PopUpOFF/blob/develop/background/background.js#L90"  rel="noreferrer" target="_blank" class="link">Example</a> from background.js.
				</li>
				<li class="article__list_item">
					<strong class="article__col-4">Don't use 'chrome.extension.sendRequest || .onRequest' or 'chrome.extension.sendMessage || .onMessage'</strong> if you don't need to support the Chrome oldest versions. You most likely don't.
				</li>
			</ul>

			<p class="article__text">You know it all well already? Still doesn't work?</p>

			<h3 class="article__subtitle part2">You must've messed scripts up.</h3>

			<p class="article__text">Make sure your background/content scripts are <strong class="article__col-4">updated, loaded (reloaded) and available</strong> to each other at <strong class="article__col-4">the very same moment</strong> you're trying to pass a message. Try incognito mode, disable all other extensions, go get some <s>cofee</s>water. If you're pretty sure you did everything right, but it's not working anyway - take counsel of one's pillow.</p>

			<p class="article__text"><strong class="article__col-4">It is working</strong>, but the error keeps randomly appearing? Why didn't you tell me at the start? Let's go see why:</p>

			<h3 class="article__subtitle part2">Browser getting you there</h3>

			<p class="article__text">Every time you update the dev version of your extension, Chrome, or whatever browser you use, starts to use <strong class="article__col-4">the newest version of your scripts on the opened pages (if you interact with any) but content scripts are kept from the previous "version"</strong>. They are not updating automatically (you most likely set the property "run_at": "document_end", so don't blame the browser). So, technically, <strong class="article__col-4">you're trying to reach the not injected (yet!) content script from the new version - but there is no</strong> (because you didn't load the page after the extensions update), so the browser throws an error. But it can work just as well because your new script can be identical to the old one.</p>

			<p class="article__text">What to do then? Basically, you can <strong class="article__col-4">track if an old connection is not needed</strong> and disable it or manually update your scripts. I'm going to write an article about it later.</p>

			<p class="article__text">If your content script in production is updating only with the extension itself, it should not be a problem. But now you know why you're getting this error during the development and not in production.</p>

			<p class="article__text">Thank you for attention and have a great life now. See ya!</p>
		`
	},{
		title: `Two tools to save your time`,
		slug: `two-tools`,
		posted: `Sep 11, 2020`,
		tags: ['products', 'best'],
		desc: `Do you use the internet? Unexpected! Let these two apps make some optimizations with your time and productivity. Behave as usual, no changes required!`,
		image: `two_tools.jpg`,
		content: `
			<p class="article__text">I won't take more than a few minutes of your time.</p>

			<p class="article__text">We will consider <a href="https://brave.com/?ref=romanisthere"  rel="noreferrer" target="_blank" class="link">the Brave browser</a> and <a href="https://romanisthere.github.io/PopUpOFF-Website/index.html"  rel="noreferrer" target="_blank" class="link"> the PopUpOFF extension</a>. Let these two apps make some optimizations with your time and productivity. <strong class="article__col-4">Behave yourself as usual, no changes required!</strong></p>

			<h3 class="article__subtitle part1">Brave</h3>

			<div class="article__img_wr article__img_wr-header">
	            <img
	                src="../../../assets/inline/brave.jpg"
	                class="article__img_small article__img_small-full_width"
					alt="my brave stats for about 50 days"
	                title="my brave stats for about 50 days"
	                loading="lazy">
	        </div>

			<p class="article__text">Guys described all the profits of using this browser very well on <a href="https://brave.com/features/?ref=romanisthere"  rel="noreferrer" target="_blank" class="link">their website</a>, so there is no need to do it from my side.</p>

			<p class="article__text">I just want to mention that it looks like Chrome, works like Chrome, you can synchronize between devices like in Chrome, but it works <strong class="article__col-4">much faster and <a href="https://deletegoogle.com/#privacyForSale"  rel="noreferrer" target="_blank" class="link">does not spy</a> on you.</strong> You can migrate your data from Chrome as well.</p>

			<p class="article__text">Results from the picture above are mine. It's for less than 50 days. Previously I used Chrome with two different ad blocks in pair. They did well with ads, but about the time, they <a href="https://help.getadblock.com/support/solutions/articles/6000087874-adblock-is-using-lots-of-memory"  rel="noreferrer" target="_blank" class="link">consumed it</a>, not saved.</p>

			<p class="article__text">I was happy to discover it.</p>

			<h3 class="article__subtitle part2">PopUpOFF</h3>

			<div class="article__img_wr article__img_wr-header">
	            <img
	                src="../../../assets/inline/stats.jpg"
	                class="article__img_small article__img_small-full_width"
					alt="my popupoff stats for 1 month"
	                title="my popupoff stats for 1 month"
	                loading="lazy">
	        </div>

			<p class="article__text">If not me, who? If not now, when?</p>

			<p class="article__text">If you're reading services like <a href="https://medium.com/kaizen-habits/7-modern-life-habits-doing-the-most-damage-to-your-brain-e392c9cfee42"  rel="noreferrer" target="_blank" class="link">Medium</a> or <a href="https://www.economist.com/leaders/2020/09/03/americas-ugly-election"  rel="noreferrer" target="_blank" class="link">the Economist</a>, my extension will spare you <strong class="article__col-4">a lot of time or money</strong>. Medium is actually the one that inspired me to create PopUpOFF. I used to read articles there but I neurotically had to close or remove all the overlays from the screen every time I open a new page, so I investigated whether I can do something with it or not. As you noticed, I can and I did.</p>

			<p class="article__text">Even if you're not such a neurotic I was those days, sometimes you just <strong class="article__col-4">HAVE to close</strong> some overlays to continue the reading. That's where my boy comes. Once you visit such a wonderful website and enable my extension, every time you visit after, it will be <strong class="article__col-4">enabled automatically and prevent</strong> every naughty overlay from being "popuped".</p>

			<p class="article__text">Here is <a class="link" href="/posts/popupoff-tutorial/">how to squeeze</a> the maximum value from PopUpOFF.</p>

			<p class="article__text">Thank you for attention and have a great life now. See ya!</p>
		`
	},{
		title: `PopUpOFF tutorial`,
		slug: `popupoff-tutorial`,
		posted: `Sep 10, 2020`,
		tags: ['products', 'PopUpOFF', 'best'],
		desc: `How to effectively block everything you need and prevent content from being hidden. Spend 3 minutes reading this article and win it back in a few hours of surfing. Make your time valuable.`,
		image: `your_life_be_like.jpg`,
		imageLink: `https://romanisthere.github.io/assets/posts/your_life_be_like.jpg`,
		content: `
			<p class="article__text">How to effectively block everything you need and prevent content from being hidden. Spend 3 minutes reading this article and win it back in a few hours of surfing. Make your time valuable.</p>

			<h3 class="article__subtitle part1">The popup.</h3>

			<div class="article__img_wr article__img_wr-header">
	            <img
	                src="../../../assets/inline/popup.jpg"
	                width="300"
	                class="article__img_small"
	                alt="how popup looks like"
	                loading="lazy">
	        </div>

			<p class="article__text">There are three modes. Is it bad-named? <a href="https://twitter.com/RomanistHere/status/1303339699369582592"  rel="noreferrer" target="_blank" class="link">Propose your one.</a> Seriously, do it.</p>

			<p class="article__text">After you use "Hard" or "Easy" mode on the given website, PopUpOFF will remember it and the next time you visit any page on the site, it will be active already and prevent overlays from appearing.</p>

			<ul class="article__list article__text">
				<li class="article__list_item">
					<strong class="article__col-4">Hard mode</strong> stands for making things hard. Hard for other guys to interrupt you from reading. I'm joking. It's called "Hard" because <strong class="article__col-4">it removes every stuck to your screen element</strong>. Not any overlay, popup or whatever it's called is going to distract you from reading. <strong class="article__col-4">The best choice.</strong>
				</li>
				<li class="article__list_item">
					<strong class="article__col-4">Easy mode</strong>. However, if <strong class="article__col-4">you need sticky headers</strong> and navigation bars to be displayed - this is what you are looking for. Due to a lot of <a href="https://github.com/RomanistHere/PopUpOFF#remove" rel="noreferrer" target="_blank" class="link">technical stuff</a>, it loads your computer more and isn't working perfectly (it will one day). So I'd suggest you use it only for decent websites.
				</li>
				<li class="article__list_item">
					<strong class="article__col-4">I JUST WANT TO READ!</strong> is for hopeless souls. If the first two ones didn't help you at all, there are overlays and popups everywhere, this guy is created to deal with it. <strong class="article__col-4">Stops to work after you leave</strong> or reload the page. Breaks the rules.
				</li>
			</ul>

			<p class="article__text">There are also <strong class="article__col-4">stats</strong> (at the top) and <strong class="article__col-4">instructions</strong> (at the bottom) links in the popup. Just click it :)</p>

			<p class="article__text">You can disable stats at <a class="link optPage" href="#">the options page</a></p>

			<h3 class="article__subtitle part2"><a class="link optPage" href="#">Options page.</a></h3>

			<p class="article__text">It is well-described by itself. But we're talking about efficiency, so there are three main points:</p>

			<ul class="article__list article__text">
				<li class="article__list_item">
					<strong class="article__col-4">Statistics.</strong> It takes a little bit of performance and returns a lot of <a class="link" rel="noreferrer" target="_blank" href="/secrets/">fun</a>. If you feel like 5-10% will make a difference for you, disable it.
				</li>
				<li class="article__list_item">
					<strong class="article__col-4">Prevent content from hiding</strong>. I wrote <a class="link" href="/posts/prev-cont/">a tutorial<a> on this. If you don't read websites with paid content, disable it.
				</li>
				<li class="article__list_item">
					<strong class="article__col-4">Most efficiency-adding option</strong> here. "Keyboard shortcut". Scroll to the bottom. Drag (or click) to the mode you use most (left - Easy, right - Hard). Now when you open a new website with popups, just press <strong class="article__col-4">Alt + x</strong>. Closed all the overlays in 0.1 sec. Splendidly done!
				</li>
			</ul>

			<div class="article__img_wr">
	            <img
	                src="../../../assets/inline/shortcut.jpg"
	                width="300"
	                class="article__img_small"
	                alt="shortcut enabled"
	                loading="lazy">
	        </div>

			<p class="article__text">There are also <strong class="article__col-4">tutorial</strong> and <strong class="article__col-4">developer's (that's me) supervision</strong>. Last one is for guys who can accidentally remove Google search input or Facebook navigation from the page. Is it not you? Sure? Disable it.</p>

			<p class="article__text">Remember, it's a <strong class="article__col-4">non-commercial</strong> project. The only money supporting it - from you guys. <a class="link" target="_blank" rel="noreferrer" href="https://www.paypal.com/donate?hosted_button_id=CNYME27N3G5Z8">Donate</a> if you think your joy is worth it.</p>

			<h3 class="article__subtitle part3">Important update!</h3>

			<p class="article__text"><strong class="article__col-4">Automatic mode is coming. If you want to try/test it before the release, let me know:</strong> <a href="mailto:romanisthere@gmail.com" class="link">RomanistHere@gmail.com</a>, <a href="https://twitter.com/RomanistHere"  rel="noreferrer" target="_blank" class="link">Twitter</a> - I shall explain what to do.</p>

			<p class="article__text"><strong class="article__col-4">For experienced users:</strong> I will tweet once the alpha version is in the git. Clone (download) <a href="https://github.com/RomanistHere/PopUpOFF"  rel="noreferrer" target="_blank" class="link">the repository</a>, enable developer mode in your browser and load the unpacked extension.</p>

			<p class="article__text">Thank you for attention and have a great life now. See ya!</p>
		`
	},{
		title: `Prevent paid content from hiding. Tutorial`,
		slug: `prev-cont`,
		posted: `Sep 8, 2020`,
		tags: ['products', 'PopUpOFF'],
		desc: `How to make sure you are using it right.`,
		image: `prevent.jpg`,
		imageLink: `https://www.economist.com/leaders/2020/09/03/americas-ugly-election`,
		content: `
			<p class="article__text">You are trying to use the “Prevent content from hiding” feature of PopUpOFF and <strong class="article__col-4">it doesn’t work</strong>, right? Let’s see why:</p>

			<h3 class="article__subtitle part1">How to use this feature the right way.</h3>

			<ul class="article__list article__text">
				<li class="article__list_item">
					Go to <a class="link optPage" href="#">the options page</a> and <strong class="article__col-4">enable it</strong>.
				</li>
				<li class="article__list_item">
					Go to the needed page (<a href="https://www.economist.com/leaders/2020/09/03/americas-ugly-election"  rel="noreferrer" target="_blank" class="link">example</a>) and <strong class="article__col-4">activate</strong> "Easy" or "Hard" mode <strong class="article__col-4">before the content is reduced</strong>.
				</li>
				<li class="article__list_item">
					If it is or you had the page already opened, don’t worry. Make sure "Hard" or "Easy" mode is active and <strong class="article__col-4">reload the page</strong>.
				</li>
				<li class="article__list_item">
					You did everything right, if it’s not working, there could be <strong class="article__col-4">two possibilities why</strong> described below.
				</li>
			</ul>

			<h3 class="article__subtitle part2">I still can't see the full content of the article.</h3>

			<p class="article__text">PopUpOFF isn’t working properly if:</p>

			<ul class="article__list article__text">
				<li class="article__list_item">
					After (or during) the page is downloaded <strong class="article__col-4">you can see the full article</strong> and after some time pass, it’s <strong class="article__col-4">reduced</strong>.
				</li>
				<li class="article__list_item">
					You can see popups and overlays everywhere.
				</li>
			</ul>

			<p class="article__text">In this case, please, <a href="mailto:romanisthere@gmail.com" class="link">send me</a> the link - I will fix it.</p>

			<h3 class="article__subtitle part3">Sometimes it's just impossible :(</h3>

			<p class="article__text">If you can’t see the full article <strong class="article__col-4">during the loading of the page - there is nothing I can do</strong>. PopUpOFF can prevent content from reducing. But if there was no content from the start, it has nothing to work with.</p>

			<p class="article__text">Sorry, but we are not hacking anyone.</p>
		`
	},
	{
		title: `My mission as an independent developer`,
		slug: `my-mission`,
		posted: `Jul 21, 2020`,
		tags: ['other', 'products', 'best'],
		desc: `My thoughts on how to choose software, make impact on the world and what am I doing here.`,
		image: `presentation.png`,
		content: `
			<h3 class="article__subtitle part1">Part I</h3>

			<p class="article__text">There are <span class="article__col-1">good</span> products and <span class="article__col-2">bad</span> ones. I’ll explain by example. Imagine the situation: You are using an <span class="article__strong">ad blocker/messenger app</span>. You’re using it because the day you installed <span class="article__strong">it was most popular/everyone used it</span>. You're enjoying it and maybe even paying for it. But one day you see <span class="article__strong">ads on a popular website/news that the company listens to and reads everything you say through your messenger app</span> and you catch a glimpse: “Wow, that’s inappropriate. I have to deal with it” - And then… You just don’t. <span class="article__strong">There are no websites with ads other day/company that owns mess app publicly apologizes and assures that this will not happen again</span>. Everything is resolved "by itself" now. You forget about it till the next time something will happen. And it certainly will. Because it's an example of a <span class="article__col-2">bad</span> product. An inappropriate behaviour here is <span class="article__strong">betrayal of the idea for profit/invasion of privacy</span>. Not only are you not fighting it, but also letting it circulate. If someone asked your advice about <span class="article__strong">an ad blocker/a mess app</span>, you would name the <span class="article__col-2">bad</span> one. This way you're making <span class="article__col-2">bad</span> products spread and letting everyone know that you are good with such an attitude towards you. So they build more apps and services like this. Sorry, but you’re making the internet worse.</p>

			<h3 class="article__subtitle part2">Part II</h3>

			<p class="article__text">So… What can you do? Almost any product has its <span class="article__col-1">good</span> analogs. You can find it if you spend a few more minutes before installing. But your friends(if we're talking about messenger, for example) are not going to be there, aren’t they? Changing the world isn’t our goal - changing ourselves is. If one does want to chat with you, one is going to find a way to do it. You would be surprised how much you can change outside yourself once you did it inside. Explain your position to your friends. Tell them you want to use <span class="article__col-1">good</span> software and not <span class="article__col-2">bad</span> one and why. By the way, why would you want it?</p>

			<h3 class="article__subtitle part3">Part III</h3>

			<p class="article__text">As I wrote above, by not fighting inappropriate behaviour you let it continue. You make the internet deteriorate. Let the guys who treat you like that see that you are ok with it, so they continue to treat you like this. So, once they can gain profit from doing so, they won't hesitate - they already succeeded the last time. It’s a sort of a Vicious Cycle. You can’t sit, do nothing and expect that the world is going to treat you good just because it's you. Would you like to break the Vicious Cycle? What can you gain from it?</p>

			<p class="article__text">What if… You uninstall a <span class="article__col-2">bad</span> application, find its <span class="article__col-1">good</span> alternative and start to use it? Let’s see:</p>
			<ul class="article__list article__text">
				<li class="article__list_item">You improve the quality of your life. Obviously.</li>
				<li class="article__list_item">You let the app owner know that you’re refusing to use it anymore. No big deal, you can think, is it not?</li>
				<li class="article__list_item">You stop spreading this soft towards your surroundings. It is actually the way you can leverage any company in the world.</li>
			</ul>
			<p class="article__text">If everyone had behaved themself like this, there wouldn’t have been <span class="article__col-2">bad</span> products across the world. And I'm not talking about software now. But since our topic is, there is a list of some nice(not) treatment you could have missed:</p>

			<h3 class="article__subtitle part4">Part IV</h3>

			<p class="article__text">Below are only the facts, confirmed and apologized by companies:</p>
			<ul class="article__list article__text">
				<li class="article__list_item">
					Apple is eavesdropping.
					<a href="https://www.theguardian.com/technology/2019/jul/26/apple-contractors-regularly-hear-confidential-details-on-siri-recordings" rel="noreferrer" target="_blank" class="link">
						[1]
					</a>,
					<a href="https://www.forbes.com/sites/jeanbaptiste/2019/08/28/apple-apologizes-for-eavesdropping-on-customers-keeping-siri-recordings-without-permission/#437e40467b8f" rel="noreferrer" target="_blank" class="link">
						[2]
					</a>
				</li>
				<li class="article__list_item">
					Facebook is eavesdropping.
					<a href="https://www.bloomberg.com/news/articles/2019-08-13/facebook-paid-hundreds-of-contractors-to-transcribe-users-audio" rel="noreferrer" target="_blank" class="link">
						[1]
					</a>
				</li>
				<li class="article__list_item">
					Google is eavesdropping.
					<a href="https://www.vrt.be/vrtnws/en/2019/07/10/google-employees-are-eavesdropping-even-in-flemish-living-rooms/" rel="noreferrer" target="_blank" class="link">
						[1]
					</a>
				</li>
				<li class="article__list_item">
					Amazon is doing so as well.
					<a href="https://www.washingtonpost.com/business/technology/2019/05/08/2af2d282-71cc-11e9-b5ca-3d72a9fa8ff1_story.html?utm_term=.5dcccce7ed8e/" rel="noreferrer" target="_blank" class="link">
						[1]
					</a>,
					<a href="https://www.usatoday.com/story/tech/2019/05/09/amazon-accused-secretly-recording-kids-echo-dot-speakers/1150651001/" rel="noreferrer" target="_blank" class="link">
						[2]
					</a>,
					<a href="https://www.washingtonpost.com/news/the-switch/wp/2018/05/24/an-amazon-echo-recorded-a-familys-conversation-then-sent-it-to-a-random-person-in-their-contacts-report-says/?noredirect=on&utm_term=.86744938ffc2&itid=lk_inline_manual_6" rel="noreferrer" target="_blank" class="link">
						[3]
					</a>
				</li>
				<li class="article__list_item">
					Facebook is reading your messages.
					<a href="https://www.digitaltrends.com/social-media/facebook-reads-messenger-messages/" rel="noreferrer" target="_blank" class="link">
						[1]
					</a>
				</li>
				<li class="article__list_item">
					Microsoft is listening to your skype calls.
					<a href="https://www.vice.com/en_us/article/xweqbq/microsoft-contractors-listen-to-skype-calls" rel="noreferrer" target="_blank" class="link">
						[1]
					</a>,
					<a href="https://www.theguardian.com/technology/2020/jan/10/skype-audio-graded-by-workers-in-china-with-no-security-measures" rel="noreferrer" target="_blank" class="link">
						[2]
					</a>
				</li>
				<li class="article__list_item">
					Apple is cooperating with the FBI.
					<a href="https://www.reuters.com/article/us-apple-fbi-icloud-exclusive/exclusive-apple-dropped-plan-for-encrypting-backups-after-fbi-complained-sources-idUSKBN1ZK1CT" rel="noreferrer" target="_blank" class="link">
						[1]
					</a>
				</li>
				<li class="article__list_item">
					Ridiculous: Apple is slowing down their phones.
					<a href="https://www.vox.com/2017/12/22/16807056/apple-slow-iphone-batteries" rel="noreferrer" target="_blank" class="link">
						[1]
					</a>
				</li>
				<li class="article__list_item">
					Ridiculous[2]: Samsung is slowing down their phones.
					<a href="https://wccftech.com/samsung-lied-about-not-using-updates-to-slow-down-older-phones/#:~:text=Samsung%20found%20to%20be%20actively,updates%20to%20prevent%20accidental%20shutdowns.&text=At%20that%20time%2C%20Samsung%20explicitly,life%20cycles%20of%20its%20smartphones" rel="noreferrer" target="_blank" class="link">
						[1]
					</a>
				</li>
				<li class="article__list_item">
					Facebook services are leaking personal data.
					<a href="https://www.forbes.com/sites/daveywinder/2019/09/05/facebook-security-snafu-exposes-419-million-user-phone-numbers/#729422f81ab7" rel="noreferrer" target="_blank" class="link">
						[1]
					</a>,
					<a href="https://www.thesun.co.uk/tech/9119279/instagram-leak-49-million-users/" rel="noreferrer" target="_blank" class="link">
						[2]
					</a>,
					<a href="https://www.thesun.co.uk/tech/10863583/social-captain-instagram-password-leak-online-how-to/" rel="noreferrer" target="_blank" class="link">
						[3]
					</a>,
					<a href="https://www.businessinsider.fr/us/jeff-bezos-hack-whatsapp-disclosed-security-flaws-last-year-ft-2020-1" rel="noreferrer" target="_blank" class="link">
						[4]
					</a>
				</li>
				<li class="article__list_item">
					VK is cooperating with the government.
					<a href="https://www.theverge.com/2014/1/31/5363990/how-putins-cronies-seized-control-over-russias-facebook-pavel-durov-vk" rel="noreferrer" target="_blank" class="link">
						[1]
					</a>,
					<a href="https://info24.ru/news/v-kontakte-s-fsb-pochemu-socset-vydaet-dannye-polzovatelej-specsluzhbam.html" rel="noreferrer" target="_blank" class="link">
						[2]
					</a>
				</li>
				<li class="article__list_item">
					Snapchat is spying.
					<a href="https://www.vice.com/en_us/article/xwnva7/snapchat-employees-abused-data-access-spy-on-users-snaplion" rel="noreferrer" target="_blank" class="link">
						[1]
					</a>
				</li>
				<li class="article__list_item">
					TikTok is spying.
					<a href="https://www.forbes.com/sites/zakdoffman/2020/06/26/warning-apple-suddenly-catches-tiktok-secretly-spying-on-millions-of-iphone-users/#4e1ac35f34ef" rel="noreferrer" target="_blank" class="link">
						[1]
					</a>
				</li>
			</ul>

			<p class="article__text">There are only examples above. Naming every thing is out of this article. But you've got my idea, haven't you? I do not consider non-facts. Like when you say something and then you instantly see the ad about it in Chrome or Instagram. Google and Facebook didn't confirm it. Though, you can read <a href="https://telegra.ph/Why-Using-WhatsApp-Is-Dangerous-01-30-4" rel="noreferrer" target="_blank" class="link">an article</a>, why Facebook services and apps are dangerous to use - written by Pavel Durov, creator of Telegram.</p>
			<p class="article__text">How do you recognize <span class="article__col-1">good</span> software? Typically, there are only a few common points:</p>
			<ul class="article__list article__text">
				<li class="article__list_item">Open-source.</li>
				<li class="article__list_item">Non-commercial.</li>
			</ul>
			If a product can be described as one of those, it might be a <span class="article__col-1">good</span> one. If both of above, it certainly is.</p>

			<p class="article__text">Open-source means everyone can see the code. So if there are some issues, people will find it out. People can improve it. For example, the most safe messenger app is Telegram. It is open-source and there have been no major data leaks since the day it exists, because a lot of people collaborated and improved it. On the other hand, almost any other messenger app was hacked, or leaked some amount of personal data:
			<a href="https://www.reuters.com/article/us-un-whatsapp/u-n-says-officials-barred-from-using-whatsapp-since-june-2019-over-security-idUSKBN1ZM32P" rel="noreferrer" target="_blank" class="link">WhatsApp</a>,
			<a href="https://www.theverge.com/2016/11/8/13561024/microsoft-skype-baidu-linkedin-hack" rel="noreferrer" target="_blank" class="link">Skype</a>,
			<a href="https://www.independent.co.uk/news/world/asia/snapchat-hackers-india-poor-country-release-data-ceo-claim-users-account-information-a7687651.html" rel="noreferrer" target="_blank" class="link">Snapchat</a>,
			<a href="https://www.cnbc.com/2020/01/09/tiktok-security-flaw-found-that-allowed-hackers-to-access-accounts.html" rel="noreferrer" target="_blank" class="link">TikTok</a>,
			<a href="https://techbeacon.com/security/zoom-fails-grow-530000-passwords-leaked-details-sale-hacker" rel="noreferrer" target="_blank" class="link">Zoom</a>.
			You can see more here: <a href="https://www.informationisbeautiful.net/visualizations/worlds-biggest-data-breaches-hacks/" rel="noreferrer" target="_blank" class="link">"World's Biggest Data Breaches & Hacks"</a>.
			</p>


			<p class="article__text">And non-commercial means, that to gain profit from application is not the goal. So the creator is not interested in betraying his idea for money or anything else. I create non-commercial applications and PopUpOFF is a <span class="article__col-1">good</span> example. It provides unique functionality and is absolutely free. You are not going to see any ads either around any of my products or on this site.</p>

			<p class="article__text">Here is <a href="https://en.wikipedia.org/wiki/List_of_free_and_open-source_software_packages" rel="noreferrer" target="_blank" class="link">a list</a> of all open-source software, you might find something for yourself.</p>

			<p class="article__text">It must be noted that it's possible for commercial and proprietary(closed-source) software to be the <span class="article__col-1">good</span> one but it's rather rare.</p>

			<h3 class="article__subtitle part5">Part V</h3>

			<p class="article__text">Finally, what my mission is. As a  human - I want to live in a better world. And by “want” I don’t mean “I would like you to improve it”, but to do it by myself and motivate as many people as I can, you for example.</p>

			<p class="article__text">When we talk about the internet, I’m much more powerful than the average user due to my profession. So I’m trying to apply my knowledge to make someone’s life better by <a href="/apps" class="link">my products</a>, and to make someone notice, by this article. Remember, it always matters.</p>

			<p class="article__text">If I can help you with your ideas, do not hesitate to reach me: <a href="mailto:romanisthere@gmail.com" class="link">RomanistHere@gmail.com</a> - I'm here, <s>captain</s>Romanist Here.</p>

			<p class="article__text">As an independent developer, I promise to deliver best-I-can-do experience to you and never give up on this idea. Thank you for your time. Have a better life now, see ya:)</p>`
	},
	{
		title: `Letter from developer to interviewer.`,
		slug: `letter`,
		posted: `Jul 18, 2019`,
		tags: ['other'],
		desc: `If you ever were interviewing and you recognize yourself into this post, think about the words I wrote. If you are going to, I'll show you mistakes on the example. It’s 2019. Interviewers still do their job, like they were interviewed when they started their career 10 years ago.`,
		image: `interview.jpeg`,
		content: `
			<p class="article__text">If you ever were interviewing and you recognize yourself into this post, think about the words I wrote. If you are going to, I'll show you mistakes on the example. It’s 2019. Interviewers still do their job, like they were interviewed when they started their career 10 years ago.</p>

			<p class="article__text">I’ve got a conversation with “Head of integrations” at a few-year “startup X”. Below I will show and comment full content(without regarding part) of the letter, he sent me after.</p>

			<h3 class="article__subtitle part1">This is how to not write your feedback letter.</h3>

			<p class="article__text">Even if it is what you really think. Keep things professional.</p>

			<p class="article__text">“We-are-not-moving-forward-stuff and here is why:</p>

			<p class="article__text">- Im expecting candidate to know what “startup X” does as a company and what is our product, meaning did a research and have a concise choice to join that company. Otherwise I have to question your motivation.” — I could say, that is totally wrong, I won’t, but it is. The company is going to get more profit from the developer, than the developer gets from the company. But he won’t decline an offer, because he is expecting to know who he is, or where he lives, etc before the interview. There are tons of jobs nowadays that developers can apply for. It’s the interviewer’s job to interest and make them motivated. It’s not working like this now, because of supply still above demand. With opposite conditions the developer would not change his line of conduct. But the interviewer would. That’s why this is wrong(okay, I said it). Let’s continue.</p>

			<p class="article__text">“- Also I consider as a good quality of a person if he knows his weak and strong sides, which means that person has reflected on that and knows where he can improve. You mentioned that you get lazy and it turns out that you actually overwork yourself. Which is fine and you will figure it out, just that we want people who have figured out life/work balance” — this is about what the truth is and what a developer has to say to get hired. Every person in this world sometimes gets lazy. You can’t beat it. It’s from evolution. But an interviewer doesn’t expect to hear the truth. He expects a “right” template-based answer. There are discussions, like “can computers replace engineers?”. I don’t know, but a script with 50 strings can replace some interviewers.</p>

			<p class="article__text">“- I absolutely believe that everyone in our industry, has things that they hate about the industry, coding etc. If a candidate tells that everything is lovely, then in get impression, that you have not got enough experience and challenges yet.” — most non-understood point for me. I don’t really know why anyone in the world would continue to do things, if there is something to hate. I know there are people of this kind. It’s just not me. Not all moments in my job are the pleasure, but if there were something to even dislike, I would choose a different profession. There are a lot of them, you know. So if a developer loves all he does, is it a bad sign?</p>

			<p class="article__text">“- We have a very tough homework and tech interview, I got impression, that you would not be able to pass that yet. I also participated yesterday in such an interview and it’s really not easy.” — that is just not professional. Nothing to comment.</p>

			<p class="article__text">“- Salary expectations were way to high for the impression I got, which also questions if you know were you stand in the industry and how good are other people. I think it would help you a lot If you could join as a junior to a very good company with experienced devs in an open space office environment.” — word “discussable” wasn’t heard. I never knew why I should join as a junior… But this one seems a little offending for me. Not professional too, though.</p>

			<p class="article__text">Don’t get me wrong. I enjoy communicating with strangers, especially from different cultures. And I’m totally fine with this one. It’s just not the way you ever treat anyone. If you’re professional — behave accordingly. And if you are in a bad mood before an interview, especially “call” one, postpone it, it’s okay.I would rather talk with you in a good mood tomorrow.</p>

			<p class="article__text">There are a lot of very nice interviewers. I was in this role many times(I’m not the “very nice” one). The goal of my narrative is to prevent you from making simple mistakes by showing them into this real example. If you haven’t found this article any useful, you’re cool. And if you have, I believe, you’re going to be cooler now.</p>

			<p class="article__text">This article is a little bit aggressive, but it’s just the way I write. “I did not not want to offend you in any way.”</p>

			<p class="article__text">Thank you for attention and let me know what you think.</p>
		`
	},
	{
		title: `How I tested popular popup blockers`,
		slug: `test-blockers`,
		posted: `Jun 3, 2019`,
		tags: ['products'],
		desc: `This is the story about how I tested all popular Chrome popup blockers during recording a video showcase for the extension I created myself. And what are the results.`,
		image: `blockers.jpg`,
		content: `
			<p class="article__text">Hello. This is the story about how I tested all popular Chrome popup blockers during recording a video showcase for the extension I created myself. And what are the results.</p>

			<p class="article__text">For people, who want them fast. Results are sane enough. It is okay to use it.</p>

			<p class="article__text">And… you did not leave, fine. Conclusion is not the only matter. Let’s read, then.</p>

			<h3 class="article__subtitle part1">Prehistory</h3>

			<p class="article__text">So I am a developer. I created an extension, ironically, inspired by medium.com. Part of developers articles public here or at very similar platforms. You probably faced(or facing right now if you did not pay) a lot of bars at top/bottom or even popups interrupting you while reading.</p>

			<p class="article__text">I tried to remove them using the ad blocker feature — it can remove any element from the web page. But it would appear after reloading anyway. So I wrote a script that removes stuck to screen elements(like bars or popups with omnipresent cookies) permanently. And then I realized that someone, probably you, my dear reader, could find this kind of tool useful.</p>

			<h3 class="article__subtitle part2">History</h3>

			<p class="article__text">As you could know, to make the thing noticeable, it should be advertised. At least a little. So my plan was to expose “big” popular blockers in not doing their jobs properly. I was satisfied. But my expectations about the usefulness of these modern blockers was quite lower. The conclusion will be in the end.</p>

			<p class="article__text">I collected about 20–30 websites with annoying popups, half-screen bars with cookies or different ads. Installed about ten most popular popup blockers plus few ad ones. And started to test, recording my screen, so I can montage showcase.</p>

			<p class="article__text">Firstly, things went swimmingly. Popups kept appearing. Cookie notifications were still annoying. I had no hope panels and “buy smth” ads at top/bottom will disappear. But after a dozen of websites, I started to not see expected popups. “So it works” — thought I. And it worked. But all my extensions covered only about 30–40% of websites, other ones were still polluted.</p>

			<p class="article__text">I recorded enough to make the video I wanted. I started to montage, blah-blah. Then, based on first feedback from users, I removed part of possibilities. The less the user can, the more he is satisfied. I plan to return these opportunities, actually. But after that, I had to re record all data. I added one or two new extensions. Even paid one. And was about to repeat it the old way…</p>

			<p class="article__text">From the start I understood that something went wrong. Or, I can say, went right. First 4–5 websites from the previous road map were cleared by my pack of extensions. Not needed video content, huh? For some unknown reason blockers decided to block this time. About 70% of websites were free from popups. Not from cookie notifications and other layout, though.</p>

			<p class="article__text">I spent a few hours trying to get websites from different areas of life, where extensions were not working. Another problem I faced is that sometimes popups did appear but not for record. And when my “camera” was ready, they did not. So I can not characterize these blockers as stable.</p>

			<p class="article__text">Few more things, I had noticed, during mine little investigation:</p>

			<h3 class="article__subtitle part3">1. Performance and user experience.</h3>

			<p class="article__text">I can not call any of my computers powerful. After I enabled all extensions(average difference in weight x100 with extension of mine, in number of scripts to execute about 100 as well), every Chrome launch took much more time, then a clean version. Part of websites loads became torture. I understand tha it is not how it is supposed to work. I mean installing all the extensions at once, but I will make my message clean. These blockers apart miss a lot. Having it all together greatly increases percent of blocked popups, but noticeably reduces the performance.</p>

			<h3 class="article__subtitle part4">2. Wrong triggering.</h3>

			<p class="article__text">If you don't use Google for your searches, most popup blockers trigger when you just enter a different search engine. And they will not allow you to open any result. And if you force them to, they will not allow you to open the result at the new tab by clicking ctrl + mouse click, or right click and choosing “open link in new tab”. I understand how these scripts work and why. But as a user, I actually do not want them to. It is not setting up from any settings anywhere. So far, I used my “extensions starter pack” for a couple of hours, and this “feature” annoyed me much more than any popup in this life. To remove all kinds of pollution, you have to sacrifice something clean. But if it is not removing ALL problems, and still cuts your possibilities — screw it!</p>

			<h3 class="article__subtitle part5">Conclusion</h3>

			<p class="article__text">So far, it is almost all I wanted to share with you about. If you stop from reading now and think about what I want to say, you, probably, would be wrong. If you are not a fastidious guy, few or probably even one popup blocker extension in pair with any fine ad blocker would be enough, to make yourself comfortable. I believe developers updating their databases and scripts full time to make you even more comfortable.</p>

			<p class="article__text">You, probably, are not even annoyed by closing infinite popups and cookie notifications at almost every(cookie at every, it is the law), so there is nothing useful in using nor mine, nor any other tool for that. It is totally okay. I guess.</p>

			<p class="article__text">But if you are getting annoyed by closing omnipresent notifications or do not like, when something interrupts from reading, and you do like stability, you should definitely take a look at the product, I developed. This article is not about it, so I will not say anything more. You will hear about it someday anyway.</p>

			<p class="article__text">Not saying goodbye. Have a good time!</p>
		`
	},
]

export default posts
