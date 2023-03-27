import React from 'react';
import "./CommonContainerStyle.css";

type ButtonsType = {
    count: number;
    handleInc:(e:React.MouseEvent<HTMLElement>)=>void;
    handleRes:(e:React.MouseEvent<HTMLElement>)=>void;
    maxValueProps: number
}
export const ButtonsContainer = (props:ButtonsType) => {
    return (
        <div>
            <span><button disabled={props.count===props.maxValueProps} onClick={props.handleInc}>inc</button></span>
            <span><button disabled={props.count===0} onClick={props.handleRes}>reset</button></span>
        </div>
    );
};

