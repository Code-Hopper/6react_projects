import React from 'react'

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Comp2 = () => {
    return (
        <>
            {
                data.map((element) => {
                    return (
                        <>
                            <h1>{element}</h1>
                        </>
                    )
                })
            }
        </>
    )
}

export default Comp2