import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme';


function ChangeColor() {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");
  return (
    <div style={{marginTop:'5px'}}>
      <input type="text" onChange={(e)=>setColor(e.target.value)}/>
      <button onClick={()=>dispatch(changeColor(color))}>Change Colour</button>
    </div>
  )
}

export default ChangeColor