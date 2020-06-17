import React from 'react'
import {connect} from 'react-redux'
import dicriment from '../redux/actions/dicriment'
import incriment from '../redux/actions/incriment'
import reset from '../redux/actions/reset'
 const Main = (props) => {
     console.log(props)
    return (
        <div style={{backgroundColor:'gray'}}>
            <h1 style={{color:props.counter>=0?'green':'red'}}>{props.counter}</h1>
            <button style={{color:'green'}} onClick={()=>{props.inc()}} ><h1>+</h1></button>
            <button style={{color:'red'}} onClick={()=>{props.dec()}} ><h1>-</h1></button>
            <button style={{color:'blue'}} onClick={()=>{props.raz()}} ><h1>0</h1></button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        inc: ()=>{dispatch(incriment())},
        dec: ()=>{dispatch(dicriment())},
        raz: ()=>{dispatch(reset())},
        
    }
}
const mapStateToProps = (state) =>{
    return{
        counter: state.counter
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(Main) 