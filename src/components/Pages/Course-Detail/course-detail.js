import React , {Component }from 'react';
import { Link } from 'react-router-dom';

class CourseDetail extends Component {
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
						<div className="sec-heading">
							<h4>INFORMATICS PRACTICES</h4>
						</div>
						<div className="card-block box-card p-0">
							<div className="row no-gutters">
								<div className="col-lg-5 border-right p-4">
									<div className="xyz">
										<h6 className="d-title">ABOUT THE COURSE</h6>
										<p className="d-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
										veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
										commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
										velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
										occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
										mollit anim id est laborum.</p>
										<div className="rating-wrap">
											<div className="d-flex justify-content-start align-items-center mb-3">
												<div className="raing-start">
													<Link to="/#"><i className="ri-star-s-fill text-warning"></i></Link>
													<Link to="/#"><i className="ri-star-s-fill text-warning"></i></Link>
													<Link to="/#"><i className="ri-star-s-fill text-warning"></i></Link>
													<Link to="/#"><i className="ri-star-s-fill text-warning"></i></Link> 
													<Link to="/#"><i className="ri-star-s-fill text-gray"></i></Link>
												</div>
												<p className="mb-0">
													<span className="rating-count mx-1">4.2</span> 
													<span>RATING</span>
												</p>
											</div>
											<h6 className="mb-0 d-title"><span>270,453</span> already enrolled!</h6>
										</div>
									</div>
								</div>
								<div className="col-lg-7 p-4">
									<div className="d-between">
										<div className="right-block w-65">
											<h6 className="d-title">What you will learn</h6>
											<ul className="bullet-list list-unstyled">
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
												<li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
												<li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
												<li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
											</ul>
										</div>
										<div className="button-list">
											<button className="btn btn-warning btn-sm">Apply<br/>DEADLINE: 17 NOV</button>
											<button className="btn btn-gray btn-sm">SHORTLIST</button>
											<button className="btn btn-gray btn-sm">EXPLORE <br/>COLLEGE</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="testimonial-slider-wrap">
							<div className="testimonial-slide">
								<div className="media">
									<img src="/assets/img/user-img-1.png" className="img-fluid" alt="blog img" width="120" height="120" />
									<div className="media-body">
										<p className="mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
										<div className="d-flex justify-content-end">
											<span>-sunil sharma</span>
										</div>
									</div>
								</div>
							</div>
							<div className="testimonial-slide">
								<div className="media">
									<img src="/assets/img/user-img-2.png" className="img-fluid" alt="blog img" width="120" height="120" />
									<div className="media-body">
										<p className="mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
										<div className="d-flex justify-content-end">
											<span>-sunil sharma</span>
										</div>
									</div>
								</div>
							</div>
							<div className="testimonial-slide">
								<div className="media">
									<img src="/assets/img/user-img-3.png" className="img-fluid" alt="blog img" width="120" height="120" />
									<div className="media-body">
										<p className="mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
										<div className="d-flex justify-content-end">
											<span>-sunil sharma</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="box-card d-between">
							<div className="requirement">
								<h6 className="d-title">Requirements</h6>
								<ul className="bullet-list list-unstyled">
									<li>AWS Certified Solutions Architect - Associate certification recommended.</li>
									<li>Two or more years of hands-on experience designing and deploying cloud architecture on AWS.</li>
									<li>Abilities to evaluate cloud application.</li>
									<li>Requirements and make architectural recommendations for implementation.</li>
									<li>Deployment, and provisioning applications on AWS.</li>
									<li>Capabilities to provide best practices.</li>
									<li>Guidance on the architectural design across multiple applications.projects, or the enterprise</li>
								</ul>
							</div>
							<div className="rating-wrap">
								<div className="d-flex justify-content-start align-items-center mb-3">
									<div className="raing-start">
										<Link to="/#"><i className="ri-star-s-fill text-warning"></i></Link>
										<Link to="/#"><i className="ri-star-s-fill text-warning"></i></Link>
										<Link to="/#"><i className="ri-star-s-fill text-warning"></i></Link>
										<Link to="/#"><i className="ri-star-s-fill text-warning"></i></Link> 
										<Link to="/#"><i className="ri-star-s-fill text-gray"></i></Link>
									</div>
									<p className="mb-0">
										<span className="rating-count mx-1">4.2</span> 
										<span>RATING</span>
									</p>
								</div>
								<h6 className="mb-0 d-title"><span>270,453</span> already enrolled!</h6>
							</div>
							<div className="progress-wrapper">
								<h6 className="d-title mb-4">Student feedback</h6>
								<div className="progress-list">
									<div class="progress">
										<div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<div class="progress">
										<div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<div class="progress">
										<div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<div class="progress">
										<div class="progress-bar" role="progressbar"aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<div class="progress">
										<div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</div>
						</div>
						<div className="courses-slider-wrap">
							<h2 className="mb-0">Similar<br/>Online</h2>
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
						<div className="info-block box-card">
							<h5 className="text-center d-title mb-5">What is Informatics Practices?</h5>
							<div className="row">
								<div className="col-lg-6">
									<ul className="list-unstyled">
										<li>
											<h6 className="d-title">Build the Skills to Get Job ReadyWhether</h6>
											<p className="d-des">You’re looking to start a new career, or change your current one, Professional 
											Certificates on Coursera help you become job ready. Learn at your own pace, whenever and wherever it’s
											most convenient for you. Enroll today and explore a new career path with a 7 day free trial.</p>
										</li>
										<li>
											<h6 className="d-title">Hands-On Projects</h6>
											<p className="d-des">Apply your skills with hands-on projects and build a portfolio that 
											showcases your job readiness to potential employers. You'll need to 
											successfully finish the project(s) to earn your Certificate.</p>
										</li>
										<li>
											<h6 className="d-title">Earn a Career Credential</h6>
											<p>When you complete all of the courses in the program, you'll earn a 
											Certificate to share with your professional network as well as unlock 
											access to career support resources to help you kickstart your new 
											career. Many Professional Certificates have hiring partners that 
											recognize the Professional Certificate credential and others can help 
											prepare you for a certification exam. You can find more information on 
											individual Professional Certificate pages where it applies.</p>
										</li>
										<li>
											<h6 className="d-title">Hands-On Projects</h6>
											<p className="d-des">Apply your skills with hands-on projects and build a portfolio that 
											showcases your job readiness to potential employers. You'll need to 
											successfully finish the project(s) to earn your Certificate.</p>
										</li>
									</ul>
								</div>
								<div className="col-lg-5 offset-lg-1">
									<img src="/assets/img/post-1.png" className="img-fluid"  alt="feature img" width="" height="" />
								</div>
							</div>
						</div>
						<div className="box-card d-between">
							<div className="right-block">
								<h6 className="d-title">Oppurtunities</h6>
								<ul className="bullet-list list-unstyled">
									<li>AWS Certified Solutions Architect - Associate certification recommended.</li>
									<li>Two or more years of hands-on experience designing and deploying cloud architecture on AWS.</li>
									<li>Abilities to evaluate cloud application.</li>
									<li>Requirements and make architectural recommendations for implementation.</li>
									<li>Deployment, and provisioning applications on AWS.</li>
									<li>Capabilities to provide best practices.</li>
									<li>Guidance on the architectural design across multiple applications.projects, or the enterprise</li>
								</ul>
							</div>
							<div className="button-list">
								<button className="btn btn-warning btn-sm">Apply<br/>DEADLINE: 17 NOV</button>
								<button className="btn btn-gray btn-sm">SHORTLIST</button>
								<button className="btn btn-gray btn-sm">EXPLORE <br/>COLLEGE</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CourseDetail;