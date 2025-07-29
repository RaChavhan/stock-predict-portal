import axios from 'axios'
import React, {useEffect} from 'react'
import axiosInstance from '../axiosInstance'


const Dashboard = () => {
    // const accessToken = localStorage.getItem('accessToken')  // we are fetching this token in axiosinstance page
    useEffect(()=>{
        const fetchProtectedData = async () =>{
            try{
                //const response = await axios.get("http://127.0.0.1:8000/api/protected-view/",{
                const response = await axiosInstance.get("/protected-view/",{
                    // headers:{
                    //     Authorization:`Bearer ${accessToken}`     //we are fetching this bearer in axiosinstance page
                    // }
                })
                console.log('hello')
                console.log('success :', response.data)
            }catch(error){
                console.error('Error Fetching data:', error)
            }
        }
        fetchProtectedData();
    }, [])

  return (
    <>
    <div className='text-light container'>Dashboard</div>
    
    </>
  )
}

export default Dashboard