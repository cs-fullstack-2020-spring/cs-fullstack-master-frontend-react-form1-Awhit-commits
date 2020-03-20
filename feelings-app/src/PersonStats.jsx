import React, { Component } from 'react'

export default class PersonStats extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             age:"",
             emotions:"",
             hasBeenSubmitted:false

        }
    }
    handleChange = (event) =>{
        if (event.target.name === "name"){
            this.setState({name:event.target.value})
        }
        else if (event.target.name ==="age"){
            this.setState({age:event.target.value})
        }
        else if (event.target.name ==="emotions"){
            this.setState({emotions:event.target.value})
        }
    }
    handleSubmission =(event)=>{
        event.preventDefault();
        this.setState({hasBeenSubmitted:true})
    }
    render() {
        if (this.state.hasBeenSubmitted){
            return(<div>
                <p>My name is {this.state.name}</p>
                <p>My age is {this.state.age} years old</p>
                <p>I am feeling {this.state.emotions}!</p>
            </div>)
        }
        return (
            
            <div>
                <form action="">
                    <fieldset>
                        <legend>How are you feeling?</legend>
                        <div>
                            <p>
                                <label htmlFor="name">Name: </label>
                                <input type="text" name="name" id="name" value ={this.state.name} placeholder="Name" onChange ={this.handleChange}/>
                            </p>
                            <p>
                                <label htmlFor="age">Age: </label>
                                <input type="number" name="age" id="age" value ={this.state.age} placeholder ="Age" onChange={this.handleChange}/>
                            </p>
                            <p>
                                <select name="emotions" id="emotion" value = {this.state.emotions} onChange = {this.handleChange}>
                                    <option value="">Please Select An Emotion</option>
                                    <option value="great">Great</option>
                                    <option value="good">Good</option>
                                    <option value="okay">Okay</option>
                                    <option value="bad">Bad</option>
                                    <option value="terrible">Terrible</option>
                                </select>
                                
                            </p>
                            <button onClick={this.handleSubmission}>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
