import Vue from 'vue'
import Calculator from './Calculator.vue'

addServiceWorker()

// create a root instance
var app = new Vue({
  	el: '#app',
  	components: {
  		Calculator
  	},
  	template: `
  		<div>
			<h2 class="inline-header">{{message}}</h2> <span><a :href="link.href">{{link.title}}</a></span>
			<calculator></calculator>
		</div>`,
	data() {
		return {
			message: 'Calculator Test vue.js',
			link: {
				title: 'vue.js site',
				href: 'https://vuejs.org/'
			}
		}
	}
})

function addServiceWorker() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./sw.js').then((registration) => {
			console.log('Service worker registration succeeded:', registration);
		}).catch(function(error) {
			console.log('Service worker registration failed:', error);
		});
	} else {
		console.log('Service workers are not supported.');

	}
}
