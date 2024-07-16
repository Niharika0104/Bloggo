'use client'
import { useSearchParams } from "next/navigation";
import ArticleSection from "./ArticlesSection";
import { useEffect,useState } from "react";
import axios from "axios";
export default function SearchComponent(){
    const params=useSearchParams();
    const [query,setQuery]=useState(params.get('query'))
    const [res,setRes]=useState([]);
    useEffect(()=>{
        const handleSearch=async ()=>{
            const data=await axios.post("/api/query/post",{
              query:query
            })
             setRes(data.data.data)
          }
          handleSearch();
    },[])
return (
<>
<div className="text-gray-400 flex gap-2 mx-10 text-3xl">Showing Search Results for <p className="text-gray-700 font-bold">{query}</p> </div>
 <div className="w-[50%] mx-auto">
<ArticleSection dataset={res}/>
</div>
</>
)
}