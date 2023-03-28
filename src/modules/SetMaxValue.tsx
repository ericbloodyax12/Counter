import React, {ChangeEvent,KeyboardEvent,MouseEvent, useState} from 'react';
import './SetMaxValueStyle.scss'
import {setLocalStorageMax} from "./Counter";

type SetMaxValuePropsType = {
    maxValue: number
    setMaxValue: React.Dispatch<React.SetStateAction<number>> // типизация "функции" setF второго эл в массиве хука useState
}
// компонента, которая работает с установкой max значения
export const SetMaxValue = (props:SetMaxValuePropsType) => {

const [localMax,setLocalMax] = useState<number|"">("") // создаем локальные данные о мах знач

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=> { // функция замечает ввод значений в инпуте и сэтит локал переменную
                                                                // также проверка на все кроме цифр и запрет ввода
        if (!isNaN(+e.currentTarget.value)) {    // операция "+" переводит строку в цифру, т.к. все что будет в e.currentTarget.value это строка
            setLocalMax(+e.currentTarget.value)  // строку "+" переводит в NaN, но тут загвоздка в том, что если сравнивать типы Number и NaN будет давать тру (старый глюк js)
        } else { // если в итоге не цифра - запрещаем ввод
            e.preventDefault()
        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>)=> { // KeyboardEvent<HTMLInputElement> в типе убираем Handler хз что у React на уме
        if (e.key === "e") { // условие на exp, при вводе буквы е может воспринимать как за число - избавляемся
            e.preventDefault();
        }

    }
    const setMax = (e: MouseEvent<HTMLButtonElement>)=>{ // отправка локального знач в функцию, котор устанавливает мах знач на верхнем уровне по клику кнопки
        props.setMaxValue(+localMax!)
        setLocalStorageMax(+localMax!)
      setLocalMax("") // обнуление
    }
    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => { // по enter

        if (e.keyCode === 13) {
            props.setMaxValue(+localMax)

            setLocalMax("")
        }
    }

    return (
        <div>
            {/*sass обертка*/}
            <div className="form__group field">
                <div>
                    <input onChange={onChangeHandler} type={"number"} min={"0"} value={localMax === 0 ? "" : localMax}  onKeyDown={onKeyPressHandler} onKeyUp={onEnter}  className="form__field" placeholder="Name" name="name" id='name' required/>
                    <label htmlFor="name" className="form__label">Max Value</label>
                    {/*подпись инпута sass тема*/}
                </div>
               <button onClick={setMax} >Set</button>
            </div>


        </div>
    );
};

