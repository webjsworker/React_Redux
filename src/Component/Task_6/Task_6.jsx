import React from 'react'
import './Task_6.css'


class Task_6 extends React.Component {
    state = {
        editMode: false,
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
    render() {
        return (
            <div className='task_6'>Содержание ответа:
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}></input>
                    </div>
                }


                <p>Ответ</p>
            </div>
        )
    }
}

export default Task_6;