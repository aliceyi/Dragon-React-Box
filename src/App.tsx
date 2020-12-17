import React from 'react'
import ReactDom from 'react-dom'
import Button from './components/Button/index'
// import logo from '../public/images/logo.png'
const App = () => {
  return (
    <div>
      <p>React here!aaaa</p>
      <Button btnType="primary">test</Button>
      {/* <img src={logo}/> */}
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('app'))


export default App
