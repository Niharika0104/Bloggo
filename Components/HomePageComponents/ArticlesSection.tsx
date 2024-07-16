import { useState, useEffect } from 'react';
import Image from "next/image";
import staffimage1 from "@/public/Images/staffimage1.png";
import { PiHandsClappingFill } from "react-icons/pi";
import { LiaCommentSolid } from "react-icons/lia";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { AiFillAccountBook } from 'react-icons/ai';
import parse from 'html-react-parser';
import axios from "axios";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/app/Context/AuthContext";
import Shimmer from './Shimmer';
import { PostInfo } from '@/app/Types/types';
import { ImGit } from 'react-icons/im';
import { toast } from 'react-hot-toast';
import { BiCategory } from 'react-icons/bi';
const imageExtracter=(content:string)=>{
    const parser = new DOMParser();

    // Parse the HTML string into a DOM Document
    const doc = parser.parseFromString(content, 'text/html');
    
    // Select all img elements in the parsed document
    const imgElements = doc.querySelectorAll('img');
    console.log(imgElements[0].getAttribute('src'))
    return imgElements[0].getAttribute('src');
}
interface SearchInformation{
    dataset?:PostInfo[]
}
export default function Article(props:SearchInformation) {
    const router = useRouter();
    const auth = useAuth();
    const {topic}=auth;
    const [user, setUser] = useState(auth?.user);
    const [loading, setLoading] = useState(false);
    const [showMore, setShowMore] = useState(null);
    const arr:PostInfo[]=[];
    const [data, setData] = useState(arr);
   
    const toggleShowMoreDropdown = (index) => {
        setShowMore(showMore === index ? null : index);
    };
    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.post("/api/post/getposts", {
                userId: auth?.user?.userId
            });
            setData(res.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
        if(topic){
            try {
                const res = await axios.post("/api/post/getCategory", {
                    category: topic
                });
                setData(res.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }
    };
   
    const deletepost=async (id:string)=>{
        const res=await axios.post("/api/post/delete", {
            postId:id
        });
        if(res.data.status==200){
            toast.success("post deleted successfully")
            fetchData();
        }
        else{
            toast.error("some error has occured while deleting the post")
        }
    }
    useEffect(() => {
       fetchData();

       
    }, [auth]);

    return (
        <div className="flex flex-col gap-5 mx-6">
            {!loading ? (
                data?.map((item, index) => (
                    <div className="flex justify-between items-center cursor-pointer" key={item?.id}>
                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex gap-2 items-center" onClick={() => router.push(`/home/${item.id}`)}>
                                <Image src={staffimage1} alt={"staff icons"} width={24} height={24}   />
                                <p>{item.author?.name}</p>
                            </div>
                            <div>
                                {parse(item.title)}
                            </div>
                            <div className="flex w-full justify-between px-10">
                                <div className="flex gap-3" onClick={() => router.push(`/home/${item.id}`)}>
                                    <div className="text-[14px]">{item.createdAt.split('T')[0]}</div>
                                    <div><PiHandsClappingFill fontSize={22} /></div>
                                    <div><LiaCommentSolid fontSize={22} /></div>
                                </div>
                                <div className="flex gap-3 relative ">
                                    <div onClick={() => router.push(`/home/${item.id}`)}><MdOutlineBookmarkAdd fontSize={22} /></div>
                                    <div className="flex flex-col  w-full">
                                        <FiMoreHorizontal fontSize={22} onClick={() => toggleShowMoreDropdown(index)} />
                                        {showMore === index && (
                                            <div className="hidden mt-4 sm:flex flex-col z-50 absolute top-5  -left-1/2 w-min-max px-4 bg-gray-50 rounded-lg py-4">
                                                <div className='flex gap-5 '>
                                                    <CiCirclePlus fontSize={50} />
                                                    <div>
                                                        <p className='text-gray-600 font-bold'>Show More</p>
                                                        <p className='text-wrap'>Recommend more stories like this to me</p>
                                                    </div>
                                                </div>
                                                <div className='flex gap-5 w-full'>
                                                    <CiCircleMinus fontSize={50} />
                                                    <div>
                                                        <p className='text-gray-600 font-bold'>Show Less</p>
                                                        <p className='text-wrap'>Recommend less stories like this to me</p>
                                                    </div>
                                                </div>
                                                <div className='h-0 border-gray-100 w-full'></div>
                                               {user?.role==="ADMIN" && <div className='flex gap-5 text-red-600' onClick={()=>{deletepost(item.id)}}>
                                                   Delete Story
                                                </div>}
                                                <div className='flex gap-5 text-red-600'>
                                                   Report Story
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-40 will-change-auto'>
                            <img src={imageExtracter(item.content) ?? staffimage1} alt={"staff icons"} className="h-full w-full  object-cover" />
                        </div>
                        </div>
                ))
            ) : (
                <Shimmer />
            )}
        </div>
    );
}
