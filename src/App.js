import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import advice from './images/advice.jpeg'


class  App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            advice: ""
         }
    }
    componentDidMount() {
        this.fetchAdvice()
    }
    
    
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((res) => {
             const { advice } = res.data.slip
           this.setState({ advice })
            // console.log(advice)

        })
        .catch((error) => {
            console.log(error)

        })
    }
    
    render() { 
        const { advice } = this.state
        return (<div className='app'>
            <div className="card">
            <h1 className='heading'>{advice}</h1>
            <button className='button' onClick={this.fetchAdvice}><span>GIVE ME ADVICE</span></button>

            </div>

            <img src={advice} alt="advice" />
        </div>  );
    }
}
 
export default App;