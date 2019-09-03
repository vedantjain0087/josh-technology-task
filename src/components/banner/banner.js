import React, { Component } from 'react'
import './banner.css'
export default class banner extends Component {
    render() {
        return (
            <div className="container">
                <div className="row adjust">
                <div className="col-md-10 ml-auto mr-auto">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                </ol>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="images/banner_slider_01.jpg" alt="First slide" />
                    <div className="carousal_item_right_content">
                        <div className="circ_heading green_text">
                        QUIS NOSTRUM ULLAM
                        </div>
                        <div className="circ_content content_color">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                        <button className="btn_position2 green_text btn_decoration">LEARN MORE <span style={{float:'right', color:'black'}}> > </span></button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="images/banner_slider_02.jpg" alt="Second slide" />
                    <div className="carousal_item_right_content">
                        <div className="circ_heading green_text">
                        QUIS NOSTRUM ULLAM
                        </div>
                        <div className="circ_content content_color">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                        <button className="btn_position2 green_text btn_decoration">LEARN MORE <span style={{float:'right', color:'black'}}> > </span></button>
                        </div>
                    </div>
                </div>
            
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
                </a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
