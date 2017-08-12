import Vue from 'https://unpkg.com/vue"

export default (() => {

     Vue.component('numpad', {
        template: `
            <div class="numpad flex__row--reverse">
                <button class="calc__item numpad" 
                v-on:click="valueClicked($event)"
                v-for="num in numpad">
                {{num}}</button>
            </div>`,
        props: {
        	numpad: {
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
