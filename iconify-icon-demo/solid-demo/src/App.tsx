import type { Component } from 'solid-js';
import {
	Icon,
	addIcon,
	addCollection,
	disableCache,
} from '@iconify-icon/solid';
import calendarIcon from '@iconify-icons/line-md/calendar';

import UsageAPI from './demo/UsageAPI';
import UsageOffline from './demo/UsageOffline';
import InlineDemo from './demo/Inline';

// Disable cache
disableCache('all');

// Add few custom icons
addIcon('demo', calendarIcon);
addIcon('experiment2', {
	width: 16,
	height: 16,
	body: '<mask id="coffee-mask" x="0" y="0" width="16" height="16"><g fill="white"><path d="M5-2c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M8.5-2c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12-2c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4" stroke="white" stroke-width="1" fill="none"><animateMotion path="M0 0v-8" calcMode="linear" dur="3s" repeatCount="indefinite" /></path></g><rect y="4" width="16" height="12" fill="black" /><path d="M2 5H13C14.1046 5 15 5.89543 15 7V8C15 9.10457 14.1046 10 13 10H12V14C12 15.1046 11.1046 16 10 16H4C2.89543 16 2 15.1046 2 14V5Z" fill="white" /><path d="M12 6H13C13.5523 6 14 6.44772 14 7V8C14 8.55228 13.5523 9 13 9H12V6Z" fill="black" /></mask><rect mask="url(#coffee-mask)" width="16" height="16" fill="currentColor" />',
});

// Add mdi-light icons with custom prefix
addCollection({
	prefix: 'test',
	icons: {
		alert1: {
			body: '<path d="M10.5 14c4.142 0 7.5 1.567 7.5 3.5V20H3v-2.5c0-1.933 3.358-3.5 7.5-3.5zm6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S4 16.12 4 17.5V19h13v-1.5zM10.5 5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7zm0 1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5zM20 16v-1h1v1h-1zm0-3V7h1v6h-1z" fill="currentColor"/>',
		},
		link1: {
			body: '<path d="M8 13v-1h7v1H8zm7.5-6a5.5 5.5 0 1 1 0 11H13v-1h2.5a4.5 4.5 0 1 0 0-9H13V7h2.5zm-8 11a5.5 5.5 0 1 1 0-11H10v1H7.5a4.5 4.5 0 1 0 0 9H10v1H7.5z" fill="currentColor"/>',
		},
	},
	width: 24,
	height: 24,
});

const App: Component = () => {
	return (
		<>
			<UsageAPI />
			<UsageOffline />

			<InlineDemo />

			<section class="icon-24">
				<h1>Tests</h1>
				<p>Testing to make sure various attributes work...</p>
				<div>
					Rotation (same icon, 4 different directions):
					<Icon icon="line-md:arrow-left" />
					<Icon icon="line-md:arrow-left" rotate="1" />
					<Icon icon="line-md:arrow-left" rotate={2} />
					<Icon icon="line-md:arrow-left" rotate="270deg" />
				</div>
				<div>
					Flip (should be same as above):
					<Icon icon="line-md:arrow-left" />
					<Icon icon="line-md:arrow-up" />
					<Icon icon="line-md:arrow-left" flip="horizontal" />
					<Icon icon="line-md:arrow-up" flip="vertical" />
				</div>
				<div>
					Color:
					<Icon icon="demo" style="color: red;" />
				</div>
				<div>
					Big icons:
					<span style="font-size: 24px;">
						<Icon icon="demo" style="font-size: 2em" />
						<Icon icon="demo" height="48" />
						<Icon icon="demo" height={48} />
						<Icon icon="demo" height="2em" />
					</span>
				</div>
			</section>
		</>
	);
};

export default App;
