import React, { Component } from 'react'
import Data from './components/data.json';
import Text from './components/ComponentText.js';
import ComponentOptions from './components/ComponentOptions';
import Selections from './components/ComponentSelections';
import Reset from './components/ComponentReset';

class App extends Component {
  constructor(){
    super();
    this.state = ({ story: 0, selections : [], previousChoice: "", counter : 0 });
    this.clickHandler = this.clickHandler.bind(this);
  }

componentDidUpdate(prevProps, prevState) {
    const colors = ["rgb(194, 133, 143)", "rgb(125, 221, 125)", "rgb(230, 95, 169)", "rgb(65, 43, 187)"];
    if (this.state.story === 0){
        document.body.style.backgroundColor = "rgb(99, 157, 223)"
    } else if (prevState.story !== this.state.story) {
        document.body.style.backgroundColor = colors[this.state.counter];
        this.setState({counter: this.state.counter + 1});
        }
    }

    clickHandler(click){
    const id = click.target.id;
    if (id === "A" && this.state.story === 0 ){
    this.setState({story : this.state.story +1, previousChoice : id});
    } else if (id === "B" && this.state.story === 0 ){
    this.setState({story : this.state.story +2, previousChoice : id});
    };
    if (id === this.state.previousChoice && this.state.story > 0 && this.state.story < 7){
    this.setState({story : this.state.story +2, selections: [...this.state.selections, this.state.previousChoice], previousChoice : id});
    } else if (id !== this.state.previousChoice && id === "A" && this.state.story > 0 && this.state.story < 7){
    this.setState({story : this.state.story +1, selections: [...this.state.selections, this.state.previousChoice], previousChoice : id});
    } else if (id !== this.state.previousChoice && id === "B" && this.state.story > 0 && this.state.story < 7){
    this.setState({story : this.state.story +3, selections: [...this.state.selections, this.state.previousChoice], previousChoice : id});
    }
     else if ((this.state.story === 7 || this.state.story === 8) && id === "reset"){
    this.setState({ story: 0, selections: [], previousChoice: "", counter: 0})
    } else if ((this.state.story === 7 || this.state.story === 8) && (id === "A" || id === "B")){
    alert("FIN.")
  }
}

render() {
  return (
    <div className='layout'>
        <Text text={Data[this.state.story].historia} />
        <ComponentOptions a={Data[this.state.story].opciones.a} b={Data[this.state.story].opciones.b} clickHandler={(click) => this.clickHandler(click)}/>
        <Selections previous={this.state.previousChoice} selections={this.state.selections.map( (selections, i) => <li key={i}>{selections}</li>)}/>
        {this.state.story === 7 || this.state.story === 8 ? 
        <Reset clickHandler={(click) => this.clickHandler(click)}/> : null}
    </div>
);}
}

export default App;