import { Task } from './Components/Task.js';
import { TextInput } from './Components/TextInput.js';
import { Counter } from './Components/Counter.js';
import { TextHide } from './Components/TextHide.js';
import { ColorfulComponent } from './Components/ColorfulComponent.js';
import { Button } from './Components/Button.js';
import { ParentComponent } from './Components/ParentComponent.js';
import LifeCycleComponent from './Components/LifeCycleComponent.js';
import { LifeCycleComponentFunc } from './Components/LifeCycleComponentFunc.js';
import { List } from './Components/List.js';
import { useRef, useState } from 'react';

function App() {
  const textInput = useRef();
  const [listData, setListData] = useState(['компонент', 'List', 'отображает', 'список', 'элементов']);

  const handleListValueChange = (e) => {
    const index = +e.target.dataset.value;
    // setListData(prev => [...prev.slice(0, index), '!!!' + prev[index], ...prev.slice(index + 1)])
    setListData(prev => prev.map((el, i) => i === index ? '!!!' + el : el));
  }
  const handleInputKeyDown = (e) => {
    const value = e.target.value.trim();
    if (value && e.code === 'Enter') {
      setListData(prev => [...prev, value])
      e.target.value = '';
    }
  }
  return (
    <div className="App">
      <Task title={'#1'}>
        <Counter buttons={[{ title: '+1', action: 1 }]} row />
        <TextHide />
        <TextInput />
        <ColorfulComponent Component={Button} title='изменить цвет' />
        <ParentComponent />
      </Task>
      <Task title={'#2'} >
        <LifeCycleComponent />
        <LifeCycleComponentFunc />
        <p className='text-center mt-5'>вся инфа выводится в консоль</p>
      </Task>
      <Task title={'#3'}>
        <div className='component row'>
          <input type='text' ref={textInput} className='flex-grow' onKeyDown={handleInputKeyDown} />
          <Button title={'сфокусироваться'} cb={() => textInput.current.focus()} />
        </div>
        <List data={listData} cb={handleListValueChange} />
      </Task>
    </div>
  );
}

export default App;
