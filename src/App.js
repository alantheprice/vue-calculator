import Vue from 'https://unpkg.com/vue'
import Calculator from './calculator.js'

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
