import React, {ChangeEvent,KeyboardEvent,MouseEvent, useState} from 'react';
import './SetMaxValueStyle.scss'
type SetMaxValuePropsType = {
    setMaxValue: React.Dispatch<React.SetStateAction<number>>
}

export const SetMaxValue = (props:SetMaxValuePropsType) => {

const [localMax,setLocalMax] = useState<number|"">()
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=> {

        if (!isNaN(+e.currentTarget.value)) {
            setLocalMax(+e.currentTarget.value)
        } else {
            e.preventDefault()
        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>)=> {
        if (e.key === "e") {
            e.preventDefault();
        }

    }
    const setMax = (e: MouseEvent<HTMLButtonElement>)=>{
        props.setMaxValue(+localMax!)
      setLocalMax("")
    }
    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        console.log("onEnter:",e.keyCode )
        if (e.keyCode === 13) {

            props.setMaxValue(+localMax!)
            setLocalMax("")
        }
    }

    return (
        <div>
            <div className="form__group field">
                <div>
                    <input onChange={onChangeHandler} type={"number"} min={"0"} value={localMax === 0 ? "" : localMax}  onKeyDown={onKeyPressHandler} onKeyUp={onEnter}  className="form__field" placeholder="Name" name="name" id='name' required/>
                    <label htmlFor="name" className="form__label">Max Value</label>
                </div>
               <button onClick={setMax}>Set</button>
            </div>


        </div>
    );
};

    //