import Vue from 'https://unpkg.com/vue"

export default (() => {

   Vue.component('operators', {
        template: [
            '<div class="operators flex__column">',
                '<button class="calc__item operator" ',
                    'v-on:click="valueClicked($event)"',
                    'v-for="op in operators">',
                    '{{op}}',
                '</button>',
            '</div>'
        ].join(""),
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
    })
    
})()