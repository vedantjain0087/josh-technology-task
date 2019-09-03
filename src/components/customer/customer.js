import React, { Component } from 'react'
import './customer.css'
class Customer extends Component {
    render() {
        return (
            <div className="container separate">
                <div className="row">
                    <div className="col-md-10 ml-auto mr-auto">
                        <div className="row">
                    <div className="col-md-8">
                        <div className="content_header green_text">
                            OUR CUSTOMERS
                        </div>
                        <p className="content_font_size content_color margin_para">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book. I
                        </p>
                        <div className="img_container">
                            <img src="images/custmr_logo01.png"/>
                            <img src="images/custmr_logo02.png"/>
                            <img src="images/custmr_logo03.png"/>
                            <img src="images/custmr_logo04.png"/>
                            <img src="images/custmr_logo05.png"/>
                            <img src="images/custmr_logo06.png"/>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="content_header green_text">
                            IN THE NEWS
                        </div>

                        <div className="individual_news">
                            <div className="news_headline green_text">Neque porro quisquam est qui dolorem</div>
                            <div className="news_date">June 1, 2011</div>
                            <div className="content_font_size content_color">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut ... &nbsp;&nbsp; <span className="green_text">continue  reading</span> </div>
                        </div>

                        <div className="individual_news">
                            <div className="news_headline green_text">Neque porro quisquam est qui dolorem</div>
                            <div className="news_date">June 30, 2011</div>
                            <div className="content_font_size content_color">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut  ... &nbsp;&nbsp; <span className="green_text">continue  reading</span></div>
                        </div>
                        </div>
                        </div>
                    </div>
                   
                </div>
                
            </div>
        )
    }
}
export default Customer
