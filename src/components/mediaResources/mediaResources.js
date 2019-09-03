import React, { Component } from 'react'
import './mediaResources.css'
class MediaResources extends Component {
    render() {
        return (
            <div className="container separate">
            <div className="row">
            <div className="col-md-10 ml-auto mr-auto web_box grey_background">
                <div className="row">
                    <div className="col-md-6">
                    <div className="content_header green_text">
                    MEDIA RESOURCES- PHOTOS
                    </div>
                    <div className="div_separator media_container">
                    <img className="img-fluid" src="images/photo-thumbnail.png"/>
                    <img className="img-fluid" src="images/photo-thumbnail.png"/>
                    <img className="img-fluid" src="images/photo-thumbnail.png"/>
                    <img className="img-fluid" src="images/photo-thumbnail.png"/>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="content_header green_text">
                    MEDIA RESOURCES- VIDEOS
                    </div>
                    <div className="div_separator media_container">
                    <img className="img-fluid" src="images/video-thumbnail.png"/>
                    <img className="img-fluid" src="images/video-thumbnail.png"/>
                    <img className="img-fluid" src="images/video-thumbnail.png"/>
                    <img className="img-fluid" src="images/video-thumbnail.png"/>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
export default MediaResources