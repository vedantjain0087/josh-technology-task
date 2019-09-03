import React, { Component } from 'react'
import Header from '../components/header/header'
import Banner from '../components/banner/banner'
import './App.css'
class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="bg">
                <Banner/>
                </div>
            </div>
        )
    }
}



export default App;

