import React, { Component } from 'react'

export default class ComponentState extends Component {


    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name:''
        }
    }

    componentDidMount() {
document.title=`Clicked ${this.state.count} times`  

}
componentDidUpdate(prevProps, prevState) {


    if(prevState.count!==this.state.count){
        console.log('updating document title')
        document.title=`Clicked ${this.state.count} times`
    }
    
    }



  render() {   
    return (
      <div style={{textAlign:'center'}}>
      
      count: {JSON.stringify(this.state)}

      <br/><br/>
<input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
      <br/><br/>

<button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>


      </div>
    )
  }
}
