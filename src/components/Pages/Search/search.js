import React , {useState,useEffect }from 'react';
import { Link } from 'react-router-dom';

const Search = ()=>{
	let [data,setQuali] = useState([""])
    let [stream,setStream]=useState([])
    let [substream,setsubStream] = useState([])
    let [search,setSearch] = useState([])
    let [searchQul,setSearchQul] = useState('');
    let [searchStream,setSearchStream] = useState('');
    let [searchSubStream,setSearchSubStream] = useState('');
    let [country,setcountry] = useState([]);
    let [courseType,setcourseType] = useState('');

	useEffect(()=>{
		getApiData();

   },[])
   const getApiData= async()=>{
	await fetch(`https://api.odmit.com/api/v1/qualification-list`)
	.then((response)=>{
		return response.json()
	})
	.then((res)=>{
	   setQuali(res.response.data)
	   // console.log(res.response.data)
	})
	.catch((err)=>{
		console.log(err,"errorrrrrrrrrrrrrrrrrrr")
	})
}
const getStream = async(data) =>{
	setSearchQul(data)
	  await fetch(`https://api.odmit.com/api/v1/stream-list?qualification=${data}`)
	  .then((response)=>{
		  return response.json()
	  })
	  .then((res)=>{
		 setStream(res.response.data)
		 // console.log(res.response.data)
	  })
	  .catch((err)=>{
		  console.log(err,"errorrrrrrrrrrrrrrrrrrr")
	  })
  }
		return(
			<div className="session-page">
				<div className="main-header">
		           	<nav className="navbar navbar-expand-xl navbar-dark d-between"> 
		           		<button type="button" className="btn btn-primary btn-sm btn-lg">Join For Free</button>
		           		<div className="right-widget">
		           			<Link className="link">Log In</Link>
		           			<Link className="navbar-brand" to="/#">ODMIT</Link>
		           		</div>                                                          
		            </nav>
		        </div>
		        <div className="session-inner">
					<div className="d-center vh-100">
						<div className="d-center-inner">
							<div className="search-block">
								<div className="qualification search-label border-none">
									<span>Qualification</span>
									<select className="custom-select selectpicker" onChange={()}>
										<option>Select Qualification</option>
										
									</select>
								</div>
								<div className="stream search-label">
									<span>Stream</span>
									<select className="custom-select">
										<option>Select Stream</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
								<div className="subject search-label">
									<span>Subject</span>
									<select className="custom-select">
										<option>Select Subject</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
								<a href="javscript:void(0);" className="search-btn">
									<i className="ri-search-2-line"></i>
								</a>
							</div>
							<div className="s-block">
								<div className="mb-3">
									<div className="d-flex-box">
										<div className="box-inline">
											<a href="#/">
												<span className="wrap">
													<span className="d-block">Online</span>
													<span className="d-block">1000</span>
												</span>
											</a>
										</div>
										<div className="box-inline">
											<a href="#/">
												<span className="wrap">
													<span className="d-block">On-Campus</span>
													<span className="d-block">1000</span>
												</span>
											</a>
										</div>
									</div>
								</div>
								<div className="country-table">
									<div className="e-box">
										<Link to="/#">
											<span className="d-block">1000</span>
											<span className="d-block">India</span>
										</Link>
									</div>
									<div className="e-box">
										<Link to="/#">
											<span className="d-block">1000</span>
											<span className="d-block">Austria</span>
										</Link>
									</div>
									<div className="e-box">
										<Link to="/#">
											<span className="d-block">1000</span>
											<span className="d-block">Brazil</span>
										</Link>
									</div>
									<div className="e-box">
										<Link to="/#">
											<span className="d-block">1000</span>
											<span className="d-block">New Zealand</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="d-bottom">
						<div className="bottom-block">
							<h2>Get Admission <br />Online</h2>
							<p className="mb-0">Build skills with courses, <br/>certificates, and degrees online <br/>from world-class universities and compaines</p>
						</div>
					</div>
		        </div>
	        </div>
		);
	}


export default Search;