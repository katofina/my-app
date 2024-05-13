import './App.css';
import React from 'react';
import { createRef } from 'react';

import Name from './name/Name';
import List from './list/List';

class App extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {input: ""};
    this.inputRef = createRef();
    console.log(this.inputRef);

    this.onChange = this.onChange.bind(this);
    this.handle = this.handle.bind(this);
    this.focusInput = this.focusInput.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("didMount");
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("didUpdate");
  }

  componentWillUnmount() {
    console.log("willUnmount");
  }
  
  focusInput() {
    this.inputRef.current.focus();
  }
  
  render() {
    console.log("render");
    return <div>
      <div className="divForm">
        <form onSubmit={this.handle}>
        <Name user={"Андрей"}/>
        <input ref={this.inputRef} type="text" placeholder="Text for sending" value={this.state.input} onChange={this.onChange}/>
        <button id="buttonSend">Отправить</button>
        </form>
        <button onClick={this.focusInput}>Фокус</button>
      </div>
      <div>
      <List/>
      </div>
    </div>
  }

  handle(e) {
    e.preventDefault();
    console.log("Value :" + this.state.input);
  }

  onChange(e) {
    this.setState({input: e.target.value});
    const ch = document.getElementById("buttonSend");
    if(e.target.value.includes('react')) {
      ch.setAttribute("disabled", "");
    } else ch.removeAttribute("disabled");
  }
}

export default App;
