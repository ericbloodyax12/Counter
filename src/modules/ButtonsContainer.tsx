import React from 'react';

type ButtonsType = {
    count: number
    handleInc:(e:React.MouseEvent<HTMLElement>)=>void
    handleRes:(e:React.MouseEvent<HTMLElement>)=>void

}
export const ButtonsContainer = (props:ButtonsType) => {
    return (
        <div>
            <span><button disabled={props.count===5} onClick={props.handleInc}>inc</button></span>
            <span><button disabled={props.count===0} onClick={props.handleRes}>reset</button></span>
        </div>
    );
};

