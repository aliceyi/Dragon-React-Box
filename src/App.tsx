import React from 'react';
import Button from './components/Button'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType="primary" width="100px">primary Button</Button>
        <Button width="100px">default Button</Button>
        <Button btnType="noBorder" width="100px">noBorder Button</Button>
        <Button btnType="primary" disabled width="100px" >disable Button</Button>
        <Button btnType="link" width="100px" href="http://www.farfetch.com">like Button</Button>
      </header>
    </div>
  );
}

export default App;
