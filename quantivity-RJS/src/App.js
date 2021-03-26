import './App.css';
import Checkbox from './components/Checkbox'
import { useState } from 'react';

function App() {
  const [task1, setTask1] = useState("");
  const [task2, setTask2] = useState("sunny");

  const taskInputHandler = (event) => {
    setTask1(event.target.value);
    console.log(event.target.id);
  }

  let row1 = []
  
  for(let i=1; i<8; i++){
    row1.push(<Checkbox col={i} />);
  }

  return (
    <div>

<h1>Your Weekly Agenda</h1>

<div className="grid-container">
  <h2>Week of: 3/22/21</h2>
  <div className="item1">Mon</div>
  <div className="item2">Tues</div>
  <div className="item3">Wed</div>  
  <div className="item4">Thurs</div>
  <div className="item5">Fri</div>
  <div className="item6">Sat</div>
  <div className="item7">Sun</div>
  <input type="text" id="task1" value={task1} onChange={taskInputHandler}/>
  
  {row1}

<input type="text" id="task2" value={task2} onChange={taskInputHandler}/>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>  
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<input type="text" id="myText" value=""/>
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>  
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<input type="text" id="myText" value=""/>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>  
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<input type="text" id="myText" value=""/>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
<label className="container"><input type="checkbox"/>
  <span className="checkmark"></span>
</label>  
  
<label className="container">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
  
</div>

    </div>
  
  );
}

export default App;
