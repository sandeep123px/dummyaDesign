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
		 console.log(res.response.data)
	  })
	  .catch((err)=>{
		  console.log(err,"errorrrrrrrrrrrrrrrrrrr")
	  })
  }

	// second close

	 const getSubStream = async(data) =>{
		 setSearchStream(data)
		 await fetch(`https://api.odmit.com/api/v1/substream-list?stream=${data}`)
		 .then((response)=>{
				 return response.json()
		 })
		 .then((res)=>{
				setsubStream(res.response.data)

		 })
		 .catch((err)=>{
				 console.log(err,"errorrrrrrrrrrrrrrrrrrr")
		 })
	 }

	 // third close
			const getSearchData =async(data) =>{
		 //    console.log(searchQul,searchStream,searchSubStream)

				let comp = "on_campus";
		 //    let online = "online"
		 // let x= document.getElementById('show1').value
		 // let y= document.getElementById('show2').value
		 // let z= document.getElementById('show').value
					if(searchQul !== undefined ){
							document.getElementById('button_hide').style.display="block"
						 //  return false;

						 await fetch(`https://api.odmit.com/api/v1/course-type-count?qualification=${searchQul}&stream=${searchStream}&sub_stream=${searchSubStream}&course_type=${comp}`)
						 // await fetch(`https://api.odmit.com/api/v1/country-course-count?qualification=${searchQul}&stream=${searchStream}&sub_stream=${searchSubStream}&course_type=${comp}`)
								 .then((response)=>{
								 return response.json()
						 })
						 .then((res)=>{
								 console.log(res)
									 setSearch(res.response.data)
									//  console.log(data)
						 })
						.catch((error)=>{
								console.log(error)
							})
				 //   }
		 }
					 else{
							 document.getElementById('button_hide').style.display= "none"
					 }
					}

					// search closed

					const getCountry =async(data) =>{
							setcourseType(data)
							let comp = data
						 // let country = "India"
						await fetch(`https://api.odmit.com/api/v1/country-course-count?qualification=${searchQul}&stream=${searchStream}&sub_stream=${searchSubStream}&course_type=${data}`)
								.then((response)=>{
								return response.json()
						})
						.then((res)=>{
									setcountry(res.response.data)
						})
					 .catch((error)=>{
							 console.log(error)
						 })
						 // console.log(`https://api.odmit.com/api/v1/country-course-count?qualification=${searchQul}&stream=${searchStream}&sub_stream=${searchSubStream}&course_type=${comp}`)
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
									<select className="custom-select" onChange={(e)=>getStream(e.target.value)}>
									<option>select Qualification</option>

				 {
             data.map((v,i)=>{
                 return(
                    <option  key ={i} >{v.qualification}</option>
                 )
             })
         }

									</select>
								</div>
								<div className="stream search-label">
									<span>Stream</span>
									<select className="custom-select" onChange={(e)=>getSubStream(e.target.value)}>
									<option>select stream</option>
				          {
				              stream.map((v,i)=>{
				                  return(
				                     <option   key ={i} >{v.stream}</option>
				                  )
				              })
				          }
									</select>
								</div>
								<div className="subject search-label" >
									<span>Subject</span>
									<select className="custom-select" id = "show" onChange={(e)=>setSearchSubStream(e.target.value)}>
									{
											substream.map((v,i)=>{
										 //   console.log(v.length)
													if( v.length >= 0 || v.length == null ){
															document.getElementById('show').style.display = "block"
															return(
														 <option   key ={i} >{v}</option>
													)
												 }
												 else{

															document.getElementById('show').style.display = "none"
												 }
											})
									}
									</select>
								</div>
								<a className="search-btn" id ="button_hide" onClick={getSearchData}>
									<i className="ri-search-2-line"></i>
								</a>
							</div>
							<div className="s-block">
								<div className="mb-3">
									<div className="d-flex-box">
												{
		                      search.map((v,i)=>{
		                          return(
																<div className="box-inline" onClick ={()=>getCountry(v.course_Type)}>
																<a href="#/">
																<span className="wrap" key={i}>
																<span className="d-block" >{v.course_Type}</span>
																<span className="d-block">{v.course_count}</span>
																</span>
																</a>
																</div>
		                          )
		                      })
		                    }
									</div>
								</div>
								<div className="country-table">
								{
									country.map((v,i)=>{

											return(
												<div className="e-box" key={i}>
													<Link to="/#">
														<span className="d-block">{v.course_count}</span>
														<span className="d-block">{v.country_name}</span>
													</Link>
												</div>
											)

									})
								}


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
