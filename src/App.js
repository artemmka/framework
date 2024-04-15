import React from 'react';
import Header from './component/Header/Header'
import Graph3D from './component/Graph3D/Graph3D';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      pageName:'Graph3D'
    };
  }
  setPageName(name){
    this.setState({pageName: name});
  }
  render (){
  return (
    <div className="App">
      <Header setPageName ={(name)=>this.setPageName(name)}/>
      {this.state.pageName === 'Graph3D'?<Graph3D/> : <></>}
    </div>
  );}
}
export default App