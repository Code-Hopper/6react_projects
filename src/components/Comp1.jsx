import React from 'react'

// conditional rendering



const Comp1 = () => {

    const GreetUser = () =>{
        let date = new Date()

        date.setHours(20)
        
        let time = date.getHours()

        if(time < 12){
            return "Good Morning"
        }else if(time > 12 && time < 16){
            return "Good Afternoon"
        }else if(time > 16 && time < 19){
            return "Good Evening"
        }else{
            return "Good Night"
        }
    }

    
    return (
        <>
            <h1> <GreetUser />  </h1>
            <h1>{ GreetUser() }</h1>
        </>
    )
}

export default Comp1