import React from 'react'
import './Task_6.css'
import '../Answer/answer.css'
import { task_6, question_6 } from '../Answer/answer'

class Task_6 extends React.Component {
    state = {
        editMode: false,
        status: "hello  world"
    }
    activateEditMode() {
        this.setState({
            editMode: true,
        });
    }
    deactivateEditMode() {
        this.setState({
            editMode: false,
        });
    }
    onStatusChange(e) {
        this.setState({
            status: e.currentTarget.value,
        });

    }
    render() {
        return (
            <div className='task_6'>
                <div className='question'> <span className='item'> {task_6}</span> {question_6} </div>

                <details>
                    <summary></summary>
                    {!this.state.editMode &&
                        <div > double click to change status:
                        <span className='status'
                                onDoubleClick={this.activateEditMode.bind(this)}
                            >{this.state.status}</span>
                        </div>
                    }

                    {this.state.editMode &&
                        <div>
                            <input
                                autoFocus={true}
                                onBlur={this.deactivateEditMode.bind(this)}
                                value={this.state.status}
                                onChange={this.onStatusChange.bind(this)}
                            ></input>
                        </div>
                    }

                </details>
            </div>
        )
    }
}

export default Task_6;