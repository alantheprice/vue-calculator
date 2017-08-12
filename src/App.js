import Vue from 'https://unpkg.com/vue'
import { Calculator } from './calculator.js'

// create a root instance
var app = new Vue({
  	el: '#app',
  	template: `
  		<div>
			<h2>{{message}}</h2>
			<calculator></calculator>
		</div>`,
	data() {
		return {
			message: 'Calculator Test vue.js'
		}
	}
})
