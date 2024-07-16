import type { Metadata } from "next";
import { AuthProvider } from "../Context/AuthContext";
import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <AuthProvider>
           <Toaster
  position="top-center"
  reverseOrder={false}
/>
          {children}
        
        </AuthProvider>
    
  );
}
