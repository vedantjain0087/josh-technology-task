import React, { Component } from 'react'
import './footer.css'
class Footer extends Component {
    render() {
        return (
           <footer>
               <div className="container">
                   <div className="row">
                       <div className="col-md-9 footer_left">
                           <ul>
                               <li>HOME</li>
                               <li>PRODUCTS</li>
                               <li>CUSTOMERS</li>
                               <li>NEWS + EVENTS</li>
                               <li>ABOUT US</li>
                           </ul>
                       </div>
                       <div className="col-md-3">
                           <div className="footer_right ml-auto">&copy; 2019 Company Name. All rights reserved.
                               </div>
                       </div>
                   </div>
               </div>
           </footer>
        )
    }
}
export default Footer
