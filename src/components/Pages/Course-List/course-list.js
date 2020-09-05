import React , {Component }from 'react';
import { Link } from 'react-router-dom';

class CourseList extends Component {
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
								<h2 className="heading">ODMIT</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="apply-for">
					<h2 className="mb-0">Apply<br/>Collaborate<br/>Explore</h2>
				</div>
				<div className="course-bulk">
					<div className="container-lg">
						<div className="courses-slider-wrap">
							<h2 className="mb-0">Best<br/>Online<br/>Courses</h2>
							<div className="courses-slider">
								<div className="slide-list">
									<div className="media">
										<img src="/assets/img/courses-img-1.png" className="img-fluid" alt="Course figure" width="100" height="130" />
										<div className="media-body">
											<h6>Python Advance</h6>
											<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
										</div>
									</div>
									<div className="d-between">
										<span className="small text-muted">T&C Apply*</span>
										<Link to="/#" class="site-link">Explore <i className="ri-add-line"></i></Link>
									</div>
								</div>
								<div className="slide-list">
									<div className="media">
										<img src="/assets/img/courses-img-2.png" className="img-fluid" alt="Course figure" width="100" height="130" />
										<div className="media-body">
											<h6>Python Advance</h6>
											<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
										</div>
									</div>
									<div className="d-between">
										<span className="small text-muted">T&C Apply*</span>
										<Link to="/#" class="site-link">Explore <i className="ri-add-line"></i></Link>
									</div>
								</div>
								<div className="slide-list">
									<div className="media">
										<img src="/assets/img/courses-img-1.png" className="img-fluid" alt="Course figure" width="100" height="130" />
										<div className="media-body">
											<h6>Python Advance</h6>
											<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
										</div>
									</div>
									<div className="d-between">
										<span className="small text-muted">T&C Apply*</span>
										<Link to="/#" class="site-link">Explore <i className="ri-add-line"></i></Link>
									</div>
								</div>
								<div className="slide-list">
									<div className="media">
										<img src="/assets/img/courses-img-2.png" className="img-fluid" alt="Course figure" width="100" height="130" />
										<div className="media-body">
											<h6>Python Advance</h6>
											<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
										</div>
									</div>
									<div className="d-between">
										<span className="small text-muted">T&C Apply*</span>
										<Link to="/#" class="site-link">Explore <i className="ri-add-line"></i></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-8">
								<div className="box-card">
									<div className="course-stack-card">
										<div className="media">
											<img src="/assets/img/course-list-1.png" className="img-fluid mr-3" alt="course-img" width="200" height="160" />
											<div className="media-body">
												<div className="mb-3">
													<h6>St.Lewis College of Commerce 
														<img src="/assets/img/badge.png" className="img-fluid ml-2" alt="badge" width="40" height="40" />
													</h6>
													<span className="text-muted small">Lonavia Mumbai, Maharasthra</span>
												</div>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
											</div>
											<div className="fixed-block">
											<img src="/assets/img/ribbon.png" className="img-fluid ribbon" alt="ribbon" width="25" height="80" />
												<span className="text-warning d-block mb-4">Get Admission Online</span>
												<p className="price">
													<span className="d-block strike">INR 5,000.00</span>
													<span className="d-block font-lg">INR 3,400.00</span>
												</p>
												<Link className="btn btn-primary btn-sm apply-btn">APPLY</Link>
											</div>
										</div>
										<div className="bottom-card">
											<div className="card-links">
												<Link to="/#">Explore Opportunities</Link>
												<Link to="/#">Alma Mater</Link>
											</div>
											<div className="review">
												<h4>ReViews</h4>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
											</div>
											<div className="card-links">
												<Link to="/#">Explore Opportunities</Link>
												<Link to="/#">Alma Mater</Link>
											</div>
										</div>
									</div>
									<div className="course-stack-card">
										<div className="media">
											<img src="/assets/img/course-list-2.png" className="img-fluid mr-3" alt="course img" width="200" height="160" />
											<div className="media-body">
												<div className="mb-3">
													<h6>St.Lewis College of Commerce 
														<img src="/assets/img/badge.png" className="img-fluid ml-2" alt="badge" width="40" height="40" />
													</h6>
													<span className="text-muted small">Lonavia Mumbai, Maharasthra</span>
												</div>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
											</div>
											<div className="fixed-block">
												<img src="/assets/img/ribbon.png" className="img-fluid ribbon" alt="ribbon" width="25" height="80" />
												<span className="text-warning d-block mb-4">Get Admission Online</span>
												<p className="price">
													<span className="d-block strike">INR 5,000.00</span>
													<span className="d-block font-lg">INR 3,400.00</span>
												</p>
												<Link className="btn btn-primary btn-sm apply-btn">APPLY</Link>
											</div>
										</div>
										<div className="bottom-card">
											<div className="card-links">
												<Link to="/#">Explore Opportunities</Link>
												<Link to="/#">Alma Mater</Link>
											</div>
											<div className="review">
												<h4>ReViews</h4>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
											</div>
											<div className="card-links">
												<Link to="/#">Explore Opportunities</Link>
												<Link to="/#">Alma Mater</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="box-card">
									<img src="/assets/img/admissions-ad-2.jpg" className="img-fluid" alt="ads" width="" height="" />
								</div>
								<div className="suggestion-block box-card">
									<h6>Suggestion For You</h6>
									<div className="media">
										<img src="/assets/img/blog-img-1.png" className="img-fluid mr-3" alt="blog-img" width="120" height="120" />
										<div className="media-body">
											<h6>Aryan University</h6>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting text of the printing and typesetting .</p>
											<Link to="/#" className="site-link">Explore <i className="ri-add-line"></i></Link>
										</div>
									</div>
									<div className="media">
										<img src="/assets/img/blog-img-2.png" className="img-fluid mr-3" alt="blog-img" width="120" height="120" />
										<div className="media-body">
											<h6>Aryan University</h6>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting text of the printing and typesetting .</p>
											<Link to="/#" className="site-link">Explore <i className="ri-add-line"></i></Link>
										</div>
									</div>
									<div className="media">
										<img src="/assets/img/blog-img-1.png" className="img-fluid mr-3" alt="blog-img" width="120" height="120" />
										<div className="media-body">
											<h6>Aryan University</h6>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting text of the printing and typesetting .</p>
											<Link to="/#" className="site-link">Explore <i className="ri-add-line"></i></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CourseList;