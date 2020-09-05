const Api = (props) =>{
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
         // first close

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
            let x= document.getElementById('show1').value
            let y= document.getElementById('show2').value
            let z= document.getElementById('show').value
                 if(x.length >= null && y.length  >= null  && z.length  >= null  ){
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
          <div>
       <div className="container">

         <h1>O D M I T</h1>
         <select id="show2" onChange={(e)=>getStream(e.target.value)} >
             <option>select Qualification</option>
         {
             data.map((v,i)=>{
                 return(
                    <option   key ={i} >{v.qualification}</option>
                 )
             })
         }
         </select>

         <select id="show1" onChange={(e)=>getSubStream(e.target.value)}>
         <option>select stream</option>
         {
             stream.map((v,i)=>{
                 return(
                    <option   key ={i} >{v.stream}</option>
                 )
             })
         }
         </select>
         <select id="show"  onChange={(e)=>setSearchSubStream(e.target.value)}>
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
         <br/>
         <div>
         <button id ="button_hide" onClick={getSearchData}>Search</button><br />
             </div>
             </div>
             <table>
                <thead>
                    <th>course Type</th>
                    <th>course Count</th>
                </thead>
                <tbody>
                    {
                      search.map((v,i)=>{


                          return(
                            <tr key={i}>
                                <button  className="back" onClick ={()=>getCountry(v.course_Type)}><td>{v.course_Type}</td></button>
                                <td>{v.course_count}</td>
                            </tr>
                          )

                      })
                    }
                </tbody>
             </table><br />

             <table>
                <thead>
                    <th>Country Name</th>
                    <th>Total Course</th>
                </thead>
                <tbody>
                    {
                      country.map((v,i)=>{

                          return(
                            <tr key={i}>
        <button className="back"
         onClick={()=>props.history.push({pathname:"/categories",state:{searchQul:searchQul,searchStream:searchStream,searchSubStream:searchSubStream,courseType:courseType,countryName:`${v.country_name}`}})}> <td>{v.country_name}</td></button>
                                 <td>{v.course_count}</td>
                            </tr>
                          )

                      })
                    }
                </tbody>
             </table><br />
       <div id="please"></div>
       </div>
      )
  }
  export default Api;