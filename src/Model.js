import React from "react";


export default class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: {}
    };
  }

  render() {
    if(!this.props.show){
        return null;
    }
  return <div>
        <h2>You got yourself a Model... now doing something</h2>
        <button  onClick={ (e)=>{
          this.props.question({id:22, label: "I gotta question"})
        }}>SEND DATA</button>
      </div>;
}
}