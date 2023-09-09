import { Task } from './Components/Task.js';
import { TextInput } from './Components/TextInput.js';
import { Counter } from './Components/Counter.js';
import { TextHide } from './Components/TextHide.js';
import { ColorfulComponent } from './Components/ColorfulComponent.js';
import { Button } from './Components/Button.js';
import { ParentComponent } from './Components/ParentComponent.js';

function App() {
  return (
    <div className="App">
      <Task title={'#1'}>
        <Counter buttons={[{ title: '+1', action: 1 }]} row/>
        <TextHide />
        <TextInput />
        <ColorfulComponent Component={Button} title='изменить цвет' />
        <ParentComponent />
      </Task>
      <Task />
    </div>
  );
}

export default App;
