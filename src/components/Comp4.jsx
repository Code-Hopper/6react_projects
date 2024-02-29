import React from 'react'

const Comp4 = (props) => {
    return (
        <>
            {
                props.array.map((element) => {
                    return(<h1>This number from comp5 is {element}</h1>)
                })
            }
        </>
    )
}

export default Comp4