import React from 'react'

let DisplaySomething = (props) => {
    return (
        <>
            <h2>This is some display</h2>
            {props.data}
            {
                props.data2.map((element)=>{
                    return (<h1>{element}</h1>)
                })
            }
        </>
    )
}

const Comp3 = () => {

    return (
        <>
            <h1>this is heading</h1>
            <DisplaySomething  data="this is some data" data2={ [1,2,3,4,5,6] } />
            {/* <img src="" alt="" /> */}
        </>
    )
}

export default Comp3