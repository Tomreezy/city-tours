import { useEffect, useState } from "react"
import OneCity from "./OneCity"

const Main = () => {
    const[pictures,setPictures]=useState([])
    const[error,setError]=useState(null)
    const[isLoading,setIsLoading]=useState(false)
    const[refresh,setRefresh]=useState(false)

    function removeIndex(indexPosition){
        const arrCopy = pictures.slice()
        const newArr = arrCopy.splice(indexPosition,1)
        console.log(newArr)
        console.log(arrCopy)
        setPictures(arrCopy)
    }

    async function fetchData(){
        try{
            setIsLoading(true)
            const response = await fetch(`https://api.unsplash.com/photos?page=1&client_id=b4DSbu6i-DPdwp3piIJ6lq-uBU_4ELhdFPOaBOG9EbE`)
            const data = await response.json()
            if(data){
                setPictures(data)
                setIsLoading(false)
            }
        }catch(error){
            setIsLoading(false)
            setError(error)
        }
    } 

    useEffect(()=>{
        fetchData()
    },[refresh])

    console.log(pictures)

    if(isLoading){
        return <div>data is loading</div>
    }

    if(null){
        return <div>
            theres been an error on your code
        </div>
    }

    console.log(pictures)

    

  return (
    <section  className="p-4 md:p-1">
        <p className="text-center text-2xl mt-16 ">Our Tours</p>
        <div className="w-32 h-1 m-6 bg-teal-300 mx-auto" ></div>
        {pictures.length===0 && (
            <div>
            <p className="text-center font-bold">No tours left</p>
            <button className="mx-auto w-24 border border-solid border-green-400 rounded-md py-2 px-4 bg-green-100 text-green-600 hover:bg-green-200 hover:text-green-700" onClick={()=> setRefresh(!refresh)}>Refresh</button>
            </div>
    
        )}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {pictures.map((pic,index)=>{
                return <OneCity {...pic} key={index} index={index} removeIndex={removeIndex}/>
            })}
            </div>
    </section>
  )
}

export default Main