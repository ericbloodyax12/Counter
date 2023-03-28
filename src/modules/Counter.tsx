import React, {MouseEventHandler, useState} from "react";
import {ButtonsContainer} from "./ButtonsContainer";
import "./CommonContainerStyle.css"
import Display from "./Display";
import {SetMaxValue} from "./SetMaxValue";

export const setLocalStorageMax = (maxValue:number) => {
    localStorage.setItem("N", JSON.stringify(maxValue))
}

export const getLocalStorageMax = () => {
  const resString =   localStorage.getItem("N")
    if (!resString) return
    return JSON.parse(resString)
}
export function Counter() {

    let [count, setCount] = useState(0)
    let [maxValue, setMaxValue] = useState(getLocalStorageMax() || 5)
    const clearLocalStorageMax = () => {
        localStorage.clear()
    }


    const handleInc = () => {
        setCount(count + 1)
    }

    const handleRes = () => {

        setMaxValue(5)
        setCount(0)
    }
        const countMax = `${count === maxValue ? "count--max" : "count"}`

    return (
        <>
            <Display count={count} classes={countMax} />
            <ButtonsContainer maxValueProps={maxValue} count={count} handleInc={handleInc} handleRes={handleRes}/>
            <SetMaxValue clearLocalStorageMax={clearLocalStorageMax} maxValue={maxValue} setMaxValue={setMaxValue}/>

        </>
    )

}