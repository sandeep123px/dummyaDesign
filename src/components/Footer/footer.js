import React , {Component }from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
	render(){
		return(
			<footer className="main-footer d-none">
           	<div className="container d-flex flex-column">
              	<div className="top-footer">
                 	<div className="signUp-form">
                    	<h3>SIGN UP FOR<br/>NEW COURSE UPDATES</h3>
                    	<div className="form-group">
                     	<input type="text" className="form-control form-control-sm" placeholder="Name" />
                    	</div>
                    	<div className="form-group">
                       <input type="email" className="form-control form-control-sm" placeholder="Email Address" />
                    	</div>
                    	<button type="submit" className="btn btn-primary btn-sm">Enroll Me</button>
                 	</div>
                	<div className="footer-link">
                    	<ul className="list-unstyled mb-0">
                       <li>BARB DWYER</li>
                       <li>BARB DWYER</li>
                       <li>BARB DWYER</li>
                       <li>BARB DWYER</li>
                       <li>BARB DWYER</li>
                       <li>BARB DWYER</li>
                       <li>BARB DWYER</li>
                       <li>BARB DWYER</li>
                    	</ul>
                    	<ul className="list-unstyled mb-0">
                       <li>BARB DWYER</li>
                       <li>BARB DWYER</li>
                       <li>BARB DWYER</li>
                       <li>BARB DWYER</li>
                    	</ul>
                 	</div>
              	</div>
              	<div className="bottom-footer text-center">
                	<ul className="list-inline social-links">
                    	<li className="list-inline-item">
                       	<Link to="/#" className="google-bg">
                        	<i className="ri-google-line"></i>
                       	</Link>
                    	</li>
                    	<li className="list-inline-item">
                       	<Link to="/#" className="insta-bg">
                        	<i className="ri-instagram-line"></i>
                       	</Link>
                    	</li>
                    	<li className="list-inline-item">
                       	<Link to="/#" className="fb-bg">
                        	<i className="ri-facebook-line"></i>
                       	</Link>
                    	</li>
                    	<li className="list-inline-item">
                       	<Link to="/#" className="twitter-bg">
                        	<i className="ri-twitter-line"></i>
                       	</Link>
                    	</li>
                    	<li className="list-inline-item">
                       	<Link to="/#" className="youtube-bg">
                        	<i className="ri-youtube-line"></i>
                       	</Link>
                    	</li>
                 	</ul>
                 	<div className="text-center">
                  	<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    	<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
                 	</div>
              	</div>
           	</div>
        	</footer>
		);
	}
}

export default Footer;