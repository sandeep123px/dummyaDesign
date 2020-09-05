import React , {Component }from 'react';
import { Link } from 'react-router-dom';

class HeaderSecond extends Component {
	render(){
		return(
			<header className="second-header d-none">
				<nav className="navbar navbar-expand-xl navbar-light">
					<Link className="navbar-brand" to="/#">ODMIT</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-toggle" aria-controls="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="nav-toggle">
						<form className="login-account ml-auto" post="most">
							<input className="form-control form-control-sm" type="text" placeholder="Email Or Phone" name="email" />
							<div className="pwd-wrap w-100 mx-2">
								<input className="form-control form-control-sm" placeholder="Password" type="Password" name="password" />
								<div className="text-right">
									<Link to="/#" className="small fw-600">Forgot Account?</Link>
								</div>
							</div>
							<Link className="btn btn-primary btn-sm btn-login" to="/#">Log In</Link>
						</form>
						<Link to="/#" className="nav_menu"><i className="ri-menu-3-fill"></i></Link>
					</div>
				</nav>
			</header>
		);
	}
}

export default HeaderSecond;