import React from 'react'
import './Task_8.css'
import '../Answer/answer.css'
import { task_8, question_8 } from '../Answer/answer'

class Task_8 extends React.Component {

    state = {
        // status: 1,
        value: "ON",
        value_1: "ON",
        value_2: "OFF",
    }
    changeMode() {
        if (this.state.value == this.state.value_1) {
            this.setState({

                value: this.state.value_2,
            });
        }
        if (this.state.value == this.state.value_2) {
            this.setState({

                value: this.state.value_1,
            });
        }
    }
    render() {
        return (
            <div className='task_8'>
                <div className='question'><span className='item'>{task_8}</span>{question_8} </div>
                <details>
                    <summary>  </summary>
                    <p>{this.state.status}</p>
                    <button 
                        onClick={this.changeMode.bind(this)}
                    >{this.state.value} </button>
                </details>

            </div>
        )
    }

}
export default Task_8;