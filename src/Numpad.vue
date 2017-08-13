<template>
    <div class="numpad flex__row--reverse">
        <button class="calc__item numpad" 
            v-on:click="valueClicked($event)" 
            v-for="num in numpad" 
            :key="num">
        {{num}}</button>
    </div>
</template>

<script>
export default {
    name: 'numpad',
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
    data() {
        return {}
    }
}
</script>

