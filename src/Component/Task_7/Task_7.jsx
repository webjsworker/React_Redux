import React from 'react'
import './Task_7.css'
import { setProgerss } from '../Action/Action'
import { connect } from 'react-redux'



const Task_7 = (props) => {
  // setInterval(() => console.log( props.progress), 3000)
// let i = 0;

// setInterval(function() {
// 	console.log(i++);
// }, 1000);

 let timerId=setInterval(function () {
  let values = props.progress + 1
  props.setProgerss(values)
  if (values > 100) {
  clearTimeout(timerId)
  }

}, 1000);



  // let Handl = () => {

  //   let timerId = setInterval(function () {
  //     let values = props.progress + 10
  //     props.setProgerss(values)
  //     if (values > 100) {
  //     clearTimeout(timerId)
  //     }

  //   }, 1000);

  // }

  return (
    <div className='task_7'>

      <details>
        <summary>  </summary>
        {/* <p onMouseOver={Handl}>Навести курсор мыши на строку для начала загррузки </p> */}
        <progress max="100" value={props.progress} key={props.progress}>
          Загружено на <span id="value">25</span>%
  </progress> <span>{props.progress}</span>
      </details>

    </div>
  )
}
export default Task_7;

// const mapStatetoProps = store => {
//   return {
//     progress: store.progress,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     setProgerss: values => dispatch(setProgerss(values)),
//   }
// }

// export default connect
//   (mapStatetoProps,
//     mapDispatchToProps
//   )(Task_7);








// class Task_7 extends React.Component {
//     state = {
//         value: 10,

//     }
//        ProcessLoad() {
//         this.setState({
//             value: 50,
//         });
//     }
//     ProcessUpLoad() {
//         this.setState({
//             value: 1,
//         });
//     }
//     // Component() {
//     //     setTimeout(this.ProcessLoad, 1000);
//     // }
//     // componentDidMount() {
//     //     setTimeout(() => {
//     //       this.increaseProgress(10)
//     //     }, 1000) 
//     //   }

//     //   increaseProgress(val) {
//     //     this.setState({ value: this.state.value + val })
//     //   }

// // dcvsdvsd



//     Component() {
//         let timer1 =  setInterval( this.setState({
//                 value: this.state.value + 1 ,
//             }), 5000);
//             return () => {
//                 clearTimeout(timer1)
//               }
//         }

//     render() {
//         return (
//             <div className='task_6'>


//                 <details>
//                     <summary></summary>
//                     <p>Пожалуйста, подождите, фотографии загружаются.</p>
//                     <span onMouseOver={this.Component.bind(this)}
//                     onMouseOut={this.ProcessUpLoad.bind(this)}
//                     >Text</span>
//                     <progress max="100" value={this.state.value} 
//                      >
//                         Загружено на <span id="value">25</span>%
//   </progress>
//                     <p>{this.state.value}</p>
//                 </details>

//             </div>
//         )
//     }
// }

// export default Task_7;





