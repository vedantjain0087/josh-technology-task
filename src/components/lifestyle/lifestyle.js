import React, { Component } from 'react'
import './lifestyle.css'

class Lifestyle extends Component {
    render() {
        return (
            <div className="container separate">
            <div className="row">
            <div className="col-md-10 ml-auto mr-auto web_box grey_background">
                <div className="content_header green_text">
                    THE CONNECTED LIFESTYLE
                </div>
                <div className="lifestyle_body row">
                    <div className="col-md-4">
                    <p className="content_font_size content_color margin_para border_right">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        <br/>
                        <br/>
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages
                            <br/>
                        <button className="btn_position green_text btn_decoration">LEARN MORE <img style={{float:'right',marginTop: '5px',marginRight: '10px'}}src="images/arrow.png"/></button>
                    </p>

                    </div>
                    <div className="col-md-8">
                        <div className="row margin_para">
                        <div className="col-md-6 border_right">
                            <div className="row grey_text">
                                <div className="col-md-12">
                                LOREM IPSUM
                                </div>
                                </div>
                            <div className="row">
                                <div className="col-md-6 lifestyle_images border_right">
                                    <img src="images/lifestyle_thmb_img01.png"/>
                                    <br/>
                                    <span className="green_text">Connect</span>
                                    <br/>
                                    <p className="content_font_size content_color">
                                        This is a long established fact that a reader will be distracted
                                     by the readable content of a page when looking at its layout.
                                     </p>
                                </div>
                                <div className="col-md-6 lifestyle_images">
                                <img src="images/lifestyle_thmb_img02.png"/>
                                <br/>
                                <span className="green_text">EXPERIENCE</span>
                                    <br/>
                                    <p className="content_font_size content_color">
                                        This is a long established fact that a reader will be distracted
                                     by the readable content of a page when looking at its layout.
                                     </p>
                                     </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="row grey_text">
                        <div className="col-md-12">LOREM IPSUM DOLOR
                        </div>
                        </div>
                            <div className="row">
                                <div className="col-md-6 border_right lifestyle_images">
                                    <img src="images/lifestyle_thmb_img03.png"/>
                                    <br/>
                                    <span className="green_text">DISCOVER</span>
                                    <br/>
                                    <p className="content_font_size content_color">
                                        This is a long established fact that a reader will be distracted
                                     by the readable content of a page when looking at its layout.
                                     </p>
                                      </div>
                                <div className="col-md-6 lifestyle_images ">
                                <img src="images/lifestyle_thmb_img04.png"/>
                                <br/>
                                <span className="green_text">GROW</span>
                                    <br/>
                                    <p className="content_font_size content_color">
                                        This is a long established fact that a reader will be distracted
                                     by the readable content of a page when looking at its layout.
                                     </p>
                                 </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Lifestyle