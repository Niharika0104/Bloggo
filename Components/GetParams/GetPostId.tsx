import { useRouter } from "next/router";
function getPostId(){
    const router=useRouter();
    const {postId}=router.query;
return postId;
}
export default getPostId;