// The Calculator implementation
import Numpad from './Numpad.vue'
import Operators from './Operators.vue'

let showingAnswer = false;
let operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b

}

export default {
    name: 'calculator',
    // don't
    components: {
        Numpad,
        Operators
    },
    methods: {
        onValueClicked: valueClicked
    },
    data() {
        return {
            operation: '',
            numpad: [9,8,7,6,5,4,3,2,1,'=','.',0],
            operators: ['+', '-', '*', '/'],
            valueClicked: valueClicked,
            display: ''
        }
    }
}

function valueClicked (elem) {
    let inputVal = elem.target.innerText
    if (this.operators.indexOf(inputVal) > -1) {
        showingAnswer = false;
        if (this.display.length === 0) {
            return
        }
        this.display = [this.display, ' ', inputVal, ' '].join('')
        return
    }

    if (showingAnswer) {
        this.display = ''
    }

    if (inputVal === '=') {
        let [lhs, operator, rhs] = this.display.split(' ')
        this.display = operations[operator](parseFloat(lhs), parseFloat(rhs))
        showingAnswer = true
        return
    }
    showingAnswer = false
    this.display += inputVal
}