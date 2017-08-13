import Vue from "https://unpkg.com/vue"
import Numpad from './Numpad.js'
import Operators from './Operators.js'

let showingAnswer = false;

let operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
};

let data = {
    operation: '',
    numpad: [9,8,7,6,5,4,3,2,1,'=','.',0],
    operators: ["+", "-", "*", "/"],
    valueClicked: valueClicked,
    display: ""
}

export default {
    name: 'calculator',
    template: `
        <div class="flex__column calc__container">
            <input class="calc__input" type="text" v-model="display">
            <div class="calc flex__row">
                <numpad @on-value-clicked="onValueClicked" :numpad="numpad"></numpad>
                <operators  @on-value-clicked="onValueClicked" :operators="operators"></operators>
            </div>
        </div>`,
    components: {
        Numpad,
        Operators
    },
    methods: {
        onValueClicked: valueClicked
    },
    data: function () {
        return data
    }
}

function valueClicked (elem) {
    console.log(this);
    let inputVal = elem.target.innerText;
    if (data.operators.indexOf(inputVal) > -1) {
        showingAnswer = false;
        if (data.display.length === 0) {
            return;
        }
        data.display = [data.display, ' ', inputVal, ' '].join('');
        return;
    }

    if (showingAnswer) {
        data.display = "";
    }

    if (inputVal === "=") {
        let [lhs, operator, rhs] = data.display.split(' ');
        data.display = operations[operator](parseFloat(lhs), parseFloat(rhs)); 
        showingAnswer = true;
        return;
    }
    showingAnswer = false;
    data.display += inputVal;
} 
