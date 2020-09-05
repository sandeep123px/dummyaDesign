import React , {Component }from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render(){
		return(
			<header className="main-header">
	           	<nav className="navbar navbar-expand-xl navbar-dark d-between"> 
	           		<button type="type" className="btn btn-primary btn-sm btn-lg">Join For Free</button>
	           		<div className="right-widget">
	           			<Link className="link">Log In</Link>
	           			<Link className="navbar-brand" to="/#">ODMIT</Link>
	           		</div>                                                          
	            </nav>
	        </header>
		);
	}
}

export default Header;