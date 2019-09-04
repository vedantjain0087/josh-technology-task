import React, { Component } from 'react'
import './customer.css'
class Customer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container separate">
                <div className="row adjust">
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
                        <div className="img_container customer_images">
                        {this.props.customer_images.map((img,i) => {
                        return   <img key={i} src={img.src}/>
                        })
                        }
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="content_header green_text">
                            IN THE NEWS
                        </div>
                        {this.props.news.map((news,i) => {
                        return  <div key={i} className="individual_news">
                        <div className="news_headline green_text">{news.title}</div>
                        <div className="news_date">{news.date}</div>
                        <div className="content_font_size content_color">{news.body}&nbsp;&nbsp; <span className="green_text">continue  reading</span> </div>
                    </div>
                        })
                        }
                        </div>
                        </div>
                    </div>
                   
                </div>
                
            </div>
        )
    }
}
export default Customer
