import React, { useState } from 'react'
import "./style.css"

const Keypad = () => {
    const [value, setValue] = useState("")

    const getData = (e) => {
        setValue(value.concat(e.target.name))
    }

    const clearData = () => {
        setValue("")
    }

    const removeData = () => {
        setValue(value.slice(0, -1))
    }

    const calculateData = () => {
        setValue(eval(value))
    }
    return (
        <>
            <div style={{
                width: "440px",
                padding: "10px",
                margin: "auto",
                marginTop: "100px",
                boxShadow: "2px 4px 6px black",
                background: "black"
            }}>
                <form action="">
                    <input type="text" value={value} style={{
                        width: "411px",
                        height: "60px",
                        background: "black",
                        color: "white",
                        fontSize: "30px",
                        textAlign: "right",
                        paddingRight: "10px",
                        margin: "10px 6px 10px 6px",
                        border: "1px solid white"
                    }} />
                </form>
                <div className='parent-child'>
                    <button id='style' onClick={clearData} style={{
                        width: "210px"
                    }}>Clear</button>
                    <button id='style' onClick={removeData} style={{
                        width: "210px"
                    }}>Remove</button>
                </div>
                <div className='parent-child'>
                    <button name="7" onClick={getData}>7</button>
                    <button name="8" onClick={getData}>8</button>
                    <button name="9" onClick={getData}>9</button>
                    <button id='style' name="+" onClick={getData}>+</button>
                </div>
                <div className='parent-child'>
                    <button name="4" onClick={getData}>4</button>
                    <button name="5" onClick={getData}>5</button>
                    <button name="6" onClick={getData}>6</button>
                    <button id='style' name="-" onClick={getData}>-</button>
                </div>
                <div className='parent-child'>
                    <button name="1" onClick={getData}>1</button>
                    <button name="2" onClick={getData}>2</button>
                    <button name="3" onClick={getData}>3</button>
                    <button id='style' name="*" onClick={getData}>X</button>
                </div>
                <div className='parent-child'>
                    <button name="." onClick={getData}>.</button>
                    <button name="0" onClick={getData}>0</button>
                    <button id='style' onClick={calculateData}>=</button>
                    <button id='style' name="/" onClick={getData}>/</button>
                </div>
            </div>
        </>
    )
}

export default Keypad