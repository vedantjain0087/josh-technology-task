import React, { Component } from 'react'

export default class banner extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                </ol>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="images/banner_slider_01.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="images/banner_slider_02.jpg" alt="Second slide" />
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
