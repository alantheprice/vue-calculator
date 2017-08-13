<template>
	<div class="operators flex__column">
		<button class="calc__item operator" 
			v-on:click="valueClicked($event)"
			v-for="op in operators"
			:key="op">
			{{op}}
		</button>
	</div>
</template>
<script>
export default {
   name: 'operators',
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
	data() {
		return {}
	}
}
</script>
