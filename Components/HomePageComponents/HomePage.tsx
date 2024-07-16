"use client"

import Navbar from "./Navbar"
import TopicsScrollBar from '@/Components/HomePageComponents/TopicsScrollBar'
import StaffPick from '@/Components/HomePageComponents/StaffPick'
import Recommendation from '@/Components/HomePageComponents/Recommendation'
import WhoToFollow from '@/Components/HomePageComponents/WhoToFollow'
import Footer from '@/Components/HomePageComponents/Footer'
import ArticleSection from "./ArticlesSection"



export default function HomePage(){
return (
    <>
    <div className="flex w-full ">
        <div className="w-[100%] sm:w-[60%] sm:border sm:border-gray-100">
            <div className="w-full  sm:w-4/5 mx-auto">
                <TopicsScrollBar/>
                <ArticleSection/>
            </div>
        </div>
        <div className="hidden sm:block w-[40%] border border-gray-100 ">
            <div className="w-3/5 flex flex-col gap-10 mt-10">
        <StaffPick/>
        <Recommendation/>
        <WhoToFollow/>
        <Footer/>
        </div>
        </div>
    </div>
    </>
)
}