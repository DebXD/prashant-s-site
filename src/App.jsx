import { useState } from "react"
import {HiDownload, HiOutlineHeart, HiHeart} from "react-icons/hi";

function App() {
  const [buttonId, setButtonId] = useState("")
  const [countClick, setCountClick] = useState(0)
  const [heart, setHeart] = useState(false)
  const cr = "https://sourceforge.net/projects/crdroid/files/lavender/9.x/crDroidAndroid-13.0-20230219-lavender-v9.2.zip/download"
  const handleClick = (e) => {
    console.log(e.target.id)
    setButtonId(e.target.id)
    console.log(countClick)
    setCountClick(countClick+1)
    
  }
  const heartCLick = () => {
    if (heart){
      setHeart(false)
      console.log(heart)
    }
    else{
    setHeart(true)
    console.log(heart)
  }
  }

  return (
    // <div className="bg-b bg-gradient-to-r from-blue-900 to-black h-screen">
      <div className=" bg-gray-900 h-screen">
    
       <h1 className=" text-center text-bold text-3xl py-6 text-white font-[Poppins]">Hi There, Welcome to Prashant's Builds</h1>
      
       <div className="bg-gray-800 px-4 py-6 mx-10 lg:mx-80 md:mx-20 rounded-lg">
        <h2 className="text-2xl font-semi-bold mb-4 text-center text-white font-[Ubuntu]">Here are some of my builds...</h2>
        {/* <!-- <p className="text-gray-700">Some text goes here.</p> --> */}
        <ul className="mt-4 flex flex-wrap justify-center pt-10">
          <li className="mb-4 flex items-center">
            
            <button id= "cr" className="ml-2 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold py-2 px-4 rounded flex items-center" 
            onClick={(e) => handleClick(e)}>Crdroid</button>
            { buttonId === "cr" && countClick%2 !== 0 ?
            (
            <button className="ml-2  bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold py-2 px-4 rounded-md shadow-md">
              <a href={cr} target="_blank"><HiDownload className="h-6 w-6"/></a></button>
            )
             : ("")

            }
            
            </li>
          <li className="mb-4 flex items-center">
            <button id="pex" className="ml-2 bg-green-500 hover:bg-green-600 active:bg-green-600 text-white font-bold py-2 px-4 rounded-md flex items-center"
            onClick={(e) => handleClick(e)}>Pixel Extended</button>
            { buttonId === "pex" && countClick%2 !== 0 ?
            (
            <button className="ml-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md shadow-md">
              <a href="#" target="_blank"><HiDownload className="h-6 w-6"/></a></button>
            )
             : ("")

            }
            </li>
          <li className="mb-4 flex items-center">
            <button id = "bliss" className="ml-2 bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md flex items-center"
            onClick={(e) => handleClick(e)}>Bliss OS</button>
            { buttonId === "bliss" && countClick%2 !== 0 ?
            (
            <button className="ml-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md shadow-md">
              <a href="#" target="_blank"><HiDownload className="h-6 w-6"/></a></button>
            )
             : ("")

            }
            </li>
        </ul>
        <ul className="mt-10 flex flex-wrap justify-center">
          <li className="mb-4">
            {
              heart ? (<button className="ml-2 active:text-pink-600 active:bg-white text-pink-600 font-bold py-2 px-4 rounded" onClick={heartCLick}>
              <a href="#" ><HiHeart className="h-6 w-6"/></a></button>) :
            
            (<button className="ml-2 text-pink-600 font-bold py-2 px-4 rounded" onClick={heartCLick}>
              <a href="#" ><HiOutlineHeart className="h-6 w-6"/></a></button>)
              }
            </li>
        </ul>
      </div>
      </div>
  )
}

export default App
