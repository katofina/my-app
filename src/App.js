import './App.css';
import React from 'react';
import Name from './name/Name';

class App extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {input: ""};
    console.log(this.state);  

    this.onChange = this.onChange.bind(this);
    this.handle = this.handle.bind(this);
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
  }

  componentDidUpdate() {
    console.log("didUpdate");
  }

  componentWillUnmount() {
    console.log("willUnmount");
  }
  
  render() {
    console.log("render");
    return <form onSubmit={this.handle}>
      <Name user={"Андрей"}/>
      <input type="text" placeholder="Text for sending" value={this.state.name} onChange={this.onChange}/>
      <button>Отправить</button>
    </form>
  }

  handle(e) {
    e.preventDefault();
    console.log("Value :" + this.state.input);
  }

  onChange(e) {
    this.setState({input: e.target.value});
  }
}

export default App;
