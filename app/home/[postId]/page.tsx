'use client'
import Article from "@/Components/HomePageComponents/Article";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import ArticleFooter from "@/Components/HomePageComponents/ArticleFooter"
import Loading from "@/app/home/loading";
export default function ArticlePage() {
  const router =usePathname();
  const postid=router.split('home/')[1];
    
    return (
      <>
      <Suspense fallback={<Loading/>}>
     <div><Article postId={postid}/>
      <ArticleFooter/>
     </div>
     </Suspense>
     </>
    );
  }
  