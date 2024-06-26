import { useEffect,useState } from 'react'
import {useLocation} from 'react-router-dom'
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';

export default function Dashborad() {
  const location=useLocation();
  const [tab,setTab]=useState('')
  useEffect(()=>{
    const urlParams=new URLSearchParams(location.search)
    const tabFromURL=urlParams.get('tab')
    if(tabFromURL){
      setTab(tabFromURL)
    }
  },[location.search])
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/*SideBar*/}
        <DashSidebar/>

      </div>
      {/*Profile*/}
      {tab==='profile'&&<DashProfile/>}
    </div>
  )
}
