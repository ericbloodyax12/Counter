import React from 'react';

type DisplayPropsType = {
    count: number
    classes: string

}


const Display = (props:DisplayPropsType) => {


    return (
        <div>
        <div className={props.classes}> {props.count} </div>
        </div>
    );
};

export default Display;