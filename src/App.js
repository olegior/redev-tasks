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
import { useContext, useRef, useState } from 'react';
import { ThemeSwitcher } from './Components/ThemeSwitcher.js';
import { Theme } from './Components/ThemeContext.js';

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
    if (value && (e.code === 'Enter' ||  e.key === 'Enter')) {
      setListData(prev => [...prev, value])
      e.target.value = '';
    }
  }

  const theme = useContext(Theme);
  return (
    <div className={`App ${theme.theme}`}>
      <Task title={'#1 props и state в React'}>
        <Counter buttons={[{ title: '+1', action: 1 }]} row />
        <TextHide />
        <TextInput />
        <ColorfulComponent Component={Button} title='изменить цвет' />
        <ParentComponent />
      </Task>
      <Task title={'#2 LifeCycle в React'} >
        <LifeCycleComponent />
        <LifeCycleComponentFunc />
        <p className='text-center mt-5'>вся инфа выводится в консоль</p>
      </Task>
      <Task title={'#3 keys, refs, events в React'}>
        <div className='component row'>
          <input type='text' ref={textInput} className='flex-grow' onKeyDown={handleInputKeyDown} />
          <Button title={'сфокусироваться'} cb={() => textInput.current.focus()} />
        </div>
        <List data={listData} cb={handleListValueChange} />
      </Task>

      <Task title={'#4 context в React'} >
        <ThemeSwitcher switchTheme={theme.handleSwitchTheme} theme={theme.theme} />
      </Task>
    </div>
  );
}

export default App;
