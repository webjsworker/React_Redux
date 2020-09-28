import React from 'react'
import './Task_6.css'


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
    onStatusChange(e){
        this.setState({
           status: e.currentTarget.value,
        });
        
    }
    render() {
        return (
            <div className='task_6'>Содержание ответа:
            
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


                
            </div>
        )
    }
}

export default Task_6;