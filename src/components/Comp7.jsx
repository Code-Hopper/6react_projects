// controlled components

import { useState } from "react"

const Comp7 = () => {

    let [textData, setTextData] = useState("")

    let handelSubmit = (event) => {
        event.preventDefault() // this methods will stop form to reload or to redirect at any page
        console.log(event.target.textData.value)
    }

    let handelChange = (event) => {
        console.log(event.target.name)

        console.log(event.target.value)

        if (event.target.value == "a") {

        } else {
            setTextData(event.target.value)
        }

    }

    return (
        <>
            <h1>Controlled Component</h1>

            <form onSubmit={handelSubmit}>
                <input name="textData" type="text" placeholder="Enter Some data !" value={textData} onChange={handelChange} />
                <button>
                    submit
                </button>
            </form>

        </>
    )
}

export default Comp7