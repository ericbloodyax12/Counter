import React, {MouseEventHandler, useState} from "react";
import {ButtonsContainer} from "./ButtonsContainer";
import "./CommonContainerStyle.css"
import Display from "./Display";
import {SetMaxValue} from "./SetMaxValue";

export function Counter() {

    let [count, setCount] = useState(0)
    let [maxValue, setMaxValue] = useState(5)
    const handleInc = () => {

        setCount(count + 1)
    }
    const handleRes = () => {
        setCount(0)
    }
        const countMax = `${count === maxValue ? "count--max" : "count"}`

    return (
        <>
            <Display count={count} classes={countMax} />
            <ButtonsContainer maxValueProps={maxValue} count={count} handleInc={handleInc} handleRes={handleRes}/>
            <SetMaxValue  setMaxValue={setMaxValue}/>

        </>
    )

}