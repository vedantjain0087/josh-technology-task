import React, { Component } from 'react'
import Header from '../components/header/header'
import Banner from '../components/banner/banner'
import Lifestyle from '../components/lifestyle/lifestyle'
import Customer from '../components/customer/customer'
import MediaResources from '../components/mediaResources/mediaResources'
import Footer from '../components/footer/footer'

import './App.css'
class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="bg">
                <Banner/>
                <Lifestyle />
                <Customer />
                <MediaResources />
                </div>
                <Footer />
            </div>
        )
    }
}



export default App;

