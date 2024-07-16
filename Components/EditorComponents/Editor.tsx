

import dynamic from 'next/dynamic';
import { useMemo, useState } from "react";
import 'react-quill/dist/quill.snow.css';
import EditorNavbar from './EditorNavbar';
import { useAuth } from '@/app/Context/AuthContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function App() {
    const auth=useAuth();
    console.log(auth,"auth")
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setloading] = useState(false);


    // Memoize the configuration object with additional tools
    const quillConfig = useMemo(() => ({
        toolbar: {
            container: [
                [{ 'font': [] }, { 'size': ['2rem'] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],
                [{ 'align': [] }],
                ['link', 'image', 'video'],
                ['clean']
            ],
        },
        clipboard: {
            matchVisual: false,
        },
    }), []);

    // Define the formats you want to support
    const formats = [
        'font', 'size',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'script', 'header', 'blockquote', 'code-block',
        'list', 'bullet', 'indent',
        'direction', 'align',
        'link', 'image', 'video'
    ];
    const publish=async ()=>{
        const userId=auth.user.userId;
        console.log(userId)
        console.log(title,body)
        setloading(true);
       const res= await axios.post("/api/post/create",{
            authorId:userId,
                title: title,
                content: body,
        })
        const data=res.data;
        console.log(data,"post data")
        if(res.status==200 ){
            console.log("data adding")
            setloading(false);
            setTitle("")
            setBody("")
            toast.success("article published successfully")

        }
    }

    return (
      <>
     <EditorNavbar title={title} content={body} publish={publish}/>
        <ReactQuill
            value={title}
            onChange={setTitle}
            modules={quillConfig}
            formats={formats}
            placeholder="Enter the title"
            className='w-[70%] mx-auto border-0 mt-5'
        />
        <ReactQuill
        value={body}
        onChange={setBody}
        modules={quillConfig} // Disable toolbar
        formats={formats}
        placeholder="Enter the content"
        className="w-[70%] mx-auto border-0 text-2xl placeholder:text-2xl placeholder:text-green-300"
       
    />
    </>
    );
}

export default App;

