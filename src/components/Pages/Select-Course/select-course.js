import React , {Component }from 'react';
import { Link } from 'react-router-dom';

class SelectCourse extends Component {
	render(){
		return(
			<div>
				<div className="top-bar">
					<div className="container-fluid">
						<div className="d-between">
							<div className="top-filter">
								<input className="form-control form-control-sm" placeholder="Stream" type="text" />
								<input className="form-control form-control-sm" placeholder="Location" type="text" />
								<input className="form-control form-control-sm" placeholder="Graduation" type="text" />
							</div>
							<div className="right-widget d-center">
								<div className="list-icon">
									<Link to="/#"><i className="ri-notification-3-line"></i></Link>
									<Link to="/#"><i className="ri-user-line"></i></Link>
									<Link to="/#"><i className="ri-shopping-cart-2-line"></i></Link>
								</div>
								<div className="toggles d-center mr-3">
									<div className="toggle-wrap d-center">
										<span>Online Courses</span>
										<label className="switch">
										  <input type="checkbox" checked />
										  <span className="slider round"></span>
										</label>
									</div>
									<div className="toggle-wrap d-center">
										<span>International Courses</span>
										<label className="switch">
										  <input type="checkbox" />
										  <span className="slider round"></span>
										</label>
									</div>
								</div>
								<h2 className="heading">ODMIT <span className="fw-200">BUCKET</span></h2>
							</div>
						</div>
					</div>
				</div>
				<div className="apply-for p-0">
					<div className="container d-between p-0">
						<div className="prof-img">
							<img src="/assets/img/profile.png" className="img-fluid" alt="profile img" />
						</div>
						<div className="stu-card">
							<div className="media">
								<div className="media-body">
								</div>
								<div className="media-img">
									<i className=""></i>
								</div>
							</div>
						</div>
						<h2 className="mb-0">BUCKET<br/>DOCUMENT<br/>course</h2>
					</div>
				</div>
			</div>
		);
	}
}

export default SelectCourse;