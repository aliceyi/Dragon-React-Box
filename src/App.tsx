import React from 'react';
import Button from './components/Button'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>learn react</div>
        <Button btnType="primary">primary Button</Button>
        <Button>default Button</Button>
        <Button btnType="noBorder">noBorder Button</Button>
        <Button btnType="primary" disabled >disable Button</Button>
        <Button btnType="link" href="http://www.farfetch.com">like Button</Button>
      </header>
    </div>
  );
}

export default App;
