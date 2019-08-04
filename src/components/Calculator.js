import React, { Component } from 'react';
import './Calculator.scss';

class Calculator extends Component {
    state = {
        num1: '',
        num2: '',
        op: '',
        carried: false,
    };

    render() {
        return (
            <section className='calculator' onClick={this.onClick}>
                <input
                    className='calculator__display'
                    readOnly
                    value={this.state.num1 + this.state.op + this.state.num2}
                />
                <button className='calculator__btn pos-neg' data-val='pos/neg'>
                    +/-
                </button>
                <button className='calculator__btn num btn0' data-val='0'>
                    0
                </button>
                <button className='calculator__btn num btn1' data-val='1'>
                    1
                </button>
                <button className='calculator__btn num btn2' data-val='2'>
                    2
                </button>
                <button className='calculator__btn num btn3' data-val='3'>
                    3
                </button>
                <button className='calculator__btn num btn4' data-val='4'>
                    4
                </button>
                <button className='calculator__btn num btn5' data-val='5'>
                    5
                </button>
                <button className='calculator__btn num btn6' data-val='6'>
                    6
                </button>
                <button className='calculator__btn num btn7' data-val='7'>
                    7
                </button>
                <button className='calculator__btn num btn8' data-val='8'>
                    8
                </button>
                <button className='calculator__btn num btn9' data-val='9'>
                    9
                </button>
                <button className='calculator__btn num decimal' data-val='.'>
                    .
                </button>
                <button className='calculator__btn op plus' data-val='+'>
                    &#43;
                </button>
                <button className='calculator__btn op minus' data-val='-'>
                    &minus;
                </button>
                <button className='calculator__btn op mult' data-val='*'>
                    &times;
                </button>
                <button className='calculator__btn op divide' data-val='/'>
                    &divide;
                </button>
                <button className='calculator__btn op pow' data-val='^'>
                    ^
                </button>
                <button className='calculator__btn equals' data-val='='>
                    &#61;
                </button>
                <button className='calculator__btn clear' data-val='clear'>
                    Clear
                </button>
            </section>
        );
    }

    onClick = (e) => {
        //* Event Delegation, only button events are handled
        if (e.target.matches('.calculator__btn')) {
            const val = e.target.dataset.val;

            //* Clear button resets state to initial values
            if (val === 'clear') {
                this.setState({
                    num1: '',
                    num2: '',
                    op: '',
                    carried: false,
                });
            }

            //* Operator buttons overwrite one another so only one operator is used
            if (e.target.matches('.op')) {
                this.setState({
                    op: val,
                });
            }

            //* Number buttons
            if (e.target.matches('.num')) {
                // If the first number was carried over from a previous operation
                // and no operator has been set, assume the user wants to overwrite the first number
                if (this.state.op === '' && this.state.carried) {
                    this.setState({
                        num1: val,
                        carried: false,
                    });

                    // If no operator has been set numbers will be added to the first number
                } else if (this.state.op === '') {
                    this.setState({
                        num1: this.state.num1 + val,
                    });

                    // Once an operator has been set numbers will be added to the second number
                } else {
                    this.setState({
                        num2: this.state.num2 + val,
                    });
                }
            }

            //* Toggling positive and negative values
            if (val === 'pos/neg') {
                // If the first number is stil being constructed and it is not negative,
                // set it to be negative...
                if (this.state.op === '' && this.state.num1.charAt(0) !== '-') {
                    this.setState({
                        num1: '-' + this.state.num1,
                    });

                    // ... otherwise set it to be positive (by removing the '-')
                } else if (this.state.op === '') {
                    this.setState({
                        num1: this.state.num1.substr(1),
                    });

                    // If the second number is stil being constructed and it is not negative,
                    // set it to be negative...
                } else if (this.state.num2.charAt(0) !== '-') {
                    this.setState({
                        num2: '-' + this.state.num2,
                    });

                    // ... otherwise set it to be positive (by removing the '-')
                } else {
                    this.setState({
                        num2: this.state.num2.substr(1),
                    });
                }
            }

            //* When the equals button is clicked, perform calculations
            if (val === '=') {
                // Parse number strings into numbers
                const n1 = parseFloat(this.state.num1);
                const n2 = parseFloat(this.state.num2);
                let answer;

                // Parse the operator and perform corresponding action
                switch (this.state.op) {
                    case '+':
                        answer = n1 + n2;
                        break;

                    case '-':
                        answer = n1 - n2;
                        break;

                    case '*':
                        answer = n1 * n2;
                        break;

                    case '/':
                        answer = n1 / n2;
                        break;

                    case '^':
                        answer = Math.pow(n1, n2);
                        break;

                    default:
                        break;
                }

                // If the answer requires decimals round them to two places
                if (answer.toFixed(2) % answer !== 0) {
                    answer = answer.toFixed(2);
                }

                // Reset state with the answer as num1 (so it can be used if desired),
                // and flag it as 'carried'
                this.setState({
                    num1: answer,
                    num2: '',
                    op: '',
                    carried: true,
                });
            }
        }
    };
}

export default Calculator;
