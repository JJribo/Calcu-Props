import React from 'react';
import {useState} from 'react';
import "./App.css";
import Button from "./Buttons/Button"

export default function App(){
  const [finalValue, setFinalValue] = useState(0);
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');

    async function app(ev){
      ev.preventDefault();
    };

    const handleFirstValueChange = (event) => {
      setFirstValue(event.target.value);
    };
    const handleSecondValueChange = (event) => {
      setSecondValue(event.target.value);
    };

    function handleClickAddition(){
        const intValue1= parseInt(firstValue);
        const intValue2 = parseInt(secondValue);
          if( !isNaN(intValue1) && !isNaN(intValue2)){
            setFinalValue(intValue1 + intValue2);
          }else{
            setFinalValue('Invalid Input');
          }
    };
    function handleClickSubtraction(){
      const intValue1= parseInt(firstValue);
      const intValue2 = parseInt(secondValue);
        if( !isNaN(intValue1) && !isNaN(intValue2)){
          setFinalValue(intValue1 - intValue2);
        }else{
          setFinalValue('Invalid Input');
        }
  };
  function handleClickMultiply(){
    const intValue1= parseInt(firstValue);
    const intValue2 = parseInt(secondValue);
      if( !isNaN(intValue1) && !isNaN(intValue2)){
        setFinalValue(intValue1 * intValue2);
      }else{
        setFinalValue('Invalid Input');
      }
};
function handleClickDevide(){
  const intValue1= parseInt(firstValue);
  const intValue2 = parseInt(secondValue);
    if( !isNaN(intValue1) && !isNaN(intValue2)){
      setFinalValue(intValue1 / intValue2);
    }else{
      setFinalValue('Invalid Input');
    }
};

  return(
    <>
    <form onSubmit={app} className="text-center">

      <input type = "text" placeholder = "First Input" value = {firstValue} onChange = {handleFirstValueChange}/>
      <input type = "text" placeholder = "Second Input" value = {secondValue} onChange = {handleSecondValueChange}/>
      
      <Button
      buttonClicked = {handleClickAddition}
      label = "Addition"
      id = "btn-one"/>

      <Button
      buttonClicked = {handleClickSubtraction}
      label = "Subtraction"
      id = "btn-two"/>

      <Button
      buttonClicked = {handleClickMultiply}
      label = "Multiply"
      id = "btn-two"/>

      <Button
      buttonClicked = {handleClickDevide}
      label = "Devide"
      id = "btn-two"/>

      <h1>{finalValue}</h1>

    </form>
    </>
  )
}
