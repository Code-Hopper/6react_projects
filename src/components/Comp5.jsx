import React from 'react'

import Comp4 from './Comp4'

let numbers = [1,2,3,4,5,6,7,9,10]

const Comp5 = () => {
  return (
    <>
        <Comp4 array={numbers} />
    </>
  )
}

export default Comp5