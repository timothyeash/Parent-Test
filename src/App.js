import React from 'react';
import './App.css';
import Modal from './Model';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      selected_question: {}
    };
    this.handleAddQuestion.bind(this);
}
  showModal = e => {
    this.setState({
      show: true
    });
  };

  handleAddQuestion = (data_from_child) => {
    this.setState({selected_question: data_from_child});
  }

  render() {
      console.log(this.state.selected_question)
      return (
        <div className="App">
        <h1>Hello Dipstick!</h1>
      <h2>ID: {this.state.selected_question.id}</h2>
      <h2>Label: {this.state.selected_question.label}</h2>
        <button  onClick={e => {
                  this.showModal();
                  }}
              > Show Modal </button>
                <Modal 
                question = {this.handleAddQuestion}
                show={this.state.show} />
        </div>
      );
  }
}
 
export default App;
