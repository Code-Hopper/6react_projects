import { React, useState } from 'react'

const Comp6 = () => {

    // syntax for a state variable
    let [number, setNumber] = useState(0)

    let handelClick = () => {
        setNumber( function(prevNumber){
            return prevNumber + 1
        } )
        setNumber( function(prevNumber){
            return prevNumber + 1
        } )
        setNumber( function(prevNumber){
            return prevNumber + 1
        } )
        setNumber( function(prevNumber){
            return prevNumber + 1
        } )
    }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={handelClick}>Increment</button>
        </>
    )
}

export default Comp6