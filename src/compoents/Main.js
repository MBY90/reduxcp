import React from 'react'
import {connect} from 'react-redux'
import dicriment from '../redux/actions/dicriment'
import incriment from '../redux/actions/incriment'
 const Main = (props) => {
     console.log(props)
    return (
        <div style={{backgroundColor:'gray'}}>
            <h1 style={{color:props.counter>=0?'green':'red'}}>{props.counter}</h1>
            <button style={{color:'green'}} onClick={()=>{props.inc()}} >+</button>
            <button style={{color:'red'}} onClick={()=>{props.dec()}} >-</button>
            
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        inc: ()=>{dispatch(incriment())},
        dec: ()=>{dispatch(dicriment())},
        
    }
}
const mapStateToProps = (state) =>{
    return{
        counter: state.counter
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(Main) 