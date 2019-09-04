import React, { Component } from 'react'
import './banner.css'
export default class banner extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="row adjust">
                <div className="col-md-10 ml-auto mr-auto">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                {this.props.banner_details.map((banner,i) => {
                    return  <li key={i} data-target="#carouselExampleIndicators" data-slide-to={i} className={i == 0 ? 'active':''} />
                    })
                    }
                {/* <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} /> */}
                </ol>
                <div className="carousel-inner">

                {this.props.banner_details.map((banner,i) => {
                    return <div key={i} className={i == 0 ? 'carousel-item active':'carousel-item '}>
                    <img className="d-block w-100" src={banner.src} alt="First slide" />
                    <div className="carousal_item_right_content">
                        <div className="circ_heading green_text">
                        {banner.heading}
                        </div>
                        <div className="circ_content content_color">
                        {banner.description}
                        <button className="btn_position2 green_text btn_decoration">LEARN MORE <img style={{float:'right',marginTop: '5px',marginRight: '10px'}}src="images/arrow.png"/></button>
                        </div>
                    </div>
                </div>
                    })
                    }
                      
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
