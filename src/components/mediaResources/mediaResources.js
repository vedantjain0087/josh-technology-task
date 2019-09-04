import React, { Component } from 'react'
import './mediaResources.css'
class MediaResources extends Component {
    constructor(props) {
        super(props);
    this.state = {
        dialogue:false,
        video_dialogue:false,
        img_src : "",
        video_src:"",
        popup_desc:"",
        image_index:"",
        video_index:""
    }
    this.onClick = this.onClick.bind(this);
    this.onClick2 = this.onClick2.bind(this);

    this.closePopup = this.closePopup.bind(this);
    this.closePopup2 = this.closePopup2.bind(this);

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.next_video = this.next_video.bind(this);
    this.prev_video = this.prev_video.bind(this);
}
onClick2(video,i){
    this.setState({
        video_dialogue:!this.state.video_dialogue,
        video_src:video.src,
        popup_desc:video.description,
        video_index:i
    })
}
onClick(img,i) {
    this.setState({
        dialogue:!this.state.dialogue,
        img_src:img.src,
        popup_desc:img.description,
        image_index:i
    })
}

closePopup(){
    this.setState({
        dialogue:!this.state.dialogue,
    })
}
closePopup2(){
    this.setState({
        video_dialogue:!this.state.video_dialogue,
    })
}
next_video(){
    var currentIndex = this.state.video_index
    if(currentIndex != this.props.media_videos.length-1){
        currentIndex += 1
    }
    else{
        currentIndex = 0
    }
    var video_details = this.props.media_videos[currentIndex]
    this.setState({
        video_src:video_details.src,
        popup_desc:video_details.description,
        video_index:currentIndex
    })
}
prev_video(){
    var currentIndex = this.state.video_index
    if(currentIndex == 0){
        currentIndex = this.props.media_videos.length -1
    }
    else{
        currentIndex -= 1
    }
    var video_details = this.props.media_videos[currentIndex]
    this.setState({
        video_src:video_details.src,
        popup_desc:video_details.description,
        video_index:currentIndex
    })
}
next(){
    var currentIndex = this.state.image_index
    if(currentIndex != this.props.media_images.length-1){
        currentIndex += 1
    }
    else{
        currentIndex = 0
    }
    var image_details = this.props.media_images[currentIndex]
    this.setState({
        img_src:image_details.src,
        popup_desc:image_details.description,
        image_index:currentIndex
    })
}
prev(){
    var currentIndex = this.state.image_index
    if(currentIndex == 0){
        currentIndex = this.props.media_images.length -1
    }
    else{
        currentIndex -= 1
    }
    var image_details = this.props.media_images[currentIndex]
    this.setState({
        img_src:image_details.src,
        popup_desc:image_details.description,
        image_index:currentIndex
    })
}
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
                    {this.props.media_images.map((img,i) => {
                    return <img className="media_image" key={i} src={img.src} alt={img.description} onClick={this.onClick.bind(this,img,i)} />
                    })
                    }
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="content_header green_text">
                    MEDIA RESOURCES- VIDEOS
                    </div>
                    <div className="div_separator media_container">
                    {this.props.media_videos.map((video,i) => {
                    return <img className="media_image img-fluid" key={i} src={video.thumb} alt={video.description} onClick={this.onClick2.bind(this,video,i)} />
                    })
                }
                    </div>
                    </div>
                </div>
            </div>
            </div>
                <div id="popup1" className={this.state.dialogue?'overlay':'hidePop overlay'}>
                <div className="popup">
                <span className="green_text" style={{fontSize:'15px'}}>{this.state.popup_desc}</span>
                <img className="close_img" onClick={this.closePopup.bind(this)} src="images/close.png"/>
                <div className="content">
                <img src={this.state.img_src} />
                </div>
                <img onClick={this.prev.bind(this)} className="prev_icon" src="images/prev.png"/>
                <img onClick={this.next.bind(this)} className="next_icon" src="images/next.png"/>
                </div>
                </div>


                <div id="popup1" className={this.state.video_dialogue?'overlay':'hidePop overlay'}>
                <div className="popup">
                <span className="green_text" style={{fontSize:'15px'}}>{this.state.popup_desc}</span>
                <img className="close_img" onClick={this.closePopup2.bind(this)} src="images/close.png"/>
                <div className="content">
                <iframe height="350 "style={{width:'100%'}} src={this.state.video_src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <img onClick={this.prev_video.bind(this)} className="prev_icon" src="images/prev.png"/>
                <img onClick={this.next_video.bind(this)} className="next_icon" src="images/next.png"/>
                </div>
                </div>
            </div>
        )
    }
}
export default MediaResources