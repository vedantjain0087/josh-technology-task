import React, { Component } from 'react'
import Header from '../components/header/header'
import Banner from '../components/banner/banner'
import Lifestyle from '../components/lifestyle/lifestyle'
import './App.css'
class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="bg">
                <Banner/>
                <Lifestyle />
                </div>
            </div>
        )
    }
}



export default App;

