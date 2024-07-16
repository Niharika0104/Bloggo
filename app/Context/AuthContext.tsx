"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';
interface AuthContextType {
    user: any;
    setUserFnc: (obj:any)=>void;
    topic:string;
    setTopicFnc:(t:string)=>void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    const [user, setUser] = useState<any>(null);
    const [topic, setTopic] = useState<any>(null);

    const [loading,setloading]=useState(false);
    const setUserFnc=(obj:any)=>{
        console.log("users beingset")
       
    }
    const cookies = new Cookies();
    console.log(cookies,"cookies")
    console.log(user)
    useEffect(() => {
      const fetchtoken=async ()=>{  
        setloading(true);
        try {
        console.log("called now")
            const response = await axios.get("/api/auth/token");
            setUser(response.data.user);
          } catch (error) {
            setUser(null);
          }
          setloading(false) 
        }
        fetchtoken();
    }, []);
    if(loading){
        return <div className='flex justify-center mt-10 w-full'><div className="animate-spin rounded-full h-6 w-6 border-t-4 border-b-4 border-indigo-600"></div></div>
    }

    return (
        <AuthContext.Provider value={{ user, setUserFnc,topic,setTopicFnc(t) {
            
        }, }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
