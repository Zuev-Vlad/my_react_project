import React from 'react'
import { connect } from 'react-redux'
import { setIsOpenPopap } from '../../redux/action/action'
// import { Canvas, Circle, Image, Path, Text } from 'react-fabricjs';


const togglePopapBtn = ({setIsOpenPopap}) => {
    const test =() => {
        console.log('test', setIsOpenPopap(true))
        setIsOpenPopap(true)
    }
    return (
        <button className="btn btn-primary" onClick={() => test(true)}> Открыть окно</button>
    )}


const mapDispatchToProps = {
    setIsOpenPopap
}

const Btn = connect(null, mapDispatchToProps)(togglePopapBtn)

export const PageCanvas = () => {
    return(
        <div className="container">
            <div className="h1">Страница с Canvas</div>
            <Btn/>
        </div>
    )
}
