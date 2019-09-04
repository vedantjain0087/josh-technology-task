import React, { Component } from 'react'
import Header from '../components/header/header'
import Banner from '../components/banner/banner'
import Lifestyle from '../components/lifestyle/lifestyle'
import Customer from '../components/customer/customer'
import MediaResources from '../components/mediaResources/mediaResources'
import Footer from '../components/footer/footer'

import './App.css'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            media_images : [
                {src:"images/imgonline-com-ua-resize-KKTkrSJgKB0.jpg", description:"DESCRIPTION OF IMAGE 1"},
                {src:"images/imgonline-com-ua-resize-q9cWlTKAvs (1).jpg", description:"DESCRIPTION OF IMAGE 2"},
                {src:"images/imgonline-com-ua-resize-wIoiAr1y5GLYu5F.jpg", description:"DESCRIPTION OF IMAGE 3"},
                {src:"images/full-photo.png", description:"DESCRIPTION OF IMAGE 4"},
            ],
            media_videos:[
                {src:"https://www.youtube.com/embed/KYWGylpVeVw",thumb:'images/Screenshot from 2019-09-04 14-30-39.png',  description:"DESCRIPTION OF VIDEO 1"},
                {src:"https://www.youtube.com/embed/I5hxGNgx1hY",thumb:'images/Screenshot from 2019-09-04 14-30-51.png',  description:"DESCRIPTION OF VIDEO 2"},
                {src:"https://www.youtube.com/embed/RwfjONT6bio", thumb:'images/Screenshot from 2019-09-04 14-31-00.png', description:"DESCRIPTION OF VIDEO 3"},
                {src:"https://www.youtube.com/embed/6NEN9QWSG_M", thumb:'images/Screenshot from 2019-09-04 14-31-08.png',description:"DESCRIPTION OF VIDEO 4"},
            ],
            banner_details:[
                {src:'images/banner_slider_01.jpg', heading:'QUIS NOSTRUM ULLAM', description:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni'},
                {src:'images/banner_slider_02.jpg', heading:'Ut enim ad minima veniam,', description:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil '},
            ],
            news:[
                {title:'Neque porro quisquam est qui dolorem',date:'June 1, 2011',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ... '},
                {title:'porro quisquam Neque qui dolorem est',date:'June 30, 2011',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ... '},
            ],
            customer_images:[
                {
                    src:'images/custmr_logo01.png'
                },
                {
                    src:'images/custmr_logo02.png'
                },
                {
                    src:'images/custmr_logo03.png'
                },
                {
                    src:'images/custmr_logo04.png'
                },
                {
                    src:'images/custmr_logo05.png'
                },
                {
                    src:'images/custmr_logo06.png'
                },
                
            ]
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="bg">
                <Banner banner_details={this.state.banner_details}/>
                <Lifestyle />
                <Customer customer_images = {this.state.customer_images} news={this.state.news}/>
                <MediaResources media_images = {this.state.media_images} media_videos = {this.state.media_videos}/>
                </div>
                <Footer />
            </div>
        )
    }
}



export default App;

