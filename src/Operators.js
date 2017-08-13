export default {

   name: 'operators',
	template:`
		<div class="operators flex__column">
			<button class="calc__item operator" 
				v-on:click="valueClicked($event)"
				v-for="op in operators">
				{{op}}
			</button>
		</div>`,
	props: {
		operators: {
			type: Array,
			required: true
		}
	},
	methods: {
		valueClicked: function(event) {
			this.$emit('on-value-clicked', event)
		}
	},
	data: function () {
		return {}
	}
}
