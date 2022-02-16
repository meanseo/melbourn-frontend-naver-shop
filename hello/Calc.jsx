import React from "react";
const Calc =()=>{
    return <>
    <h1>계산기</h1>
    <div>
    <label><b>숫자 1</b></label>
    <input/><br/>
    <label><b>연산 기호</b></label>
    <input/><br/>
    <label><b>숫자 2</b></label>
    <input/>
    <button>execute</button>
    </div>
    </>
}
export default Calc;