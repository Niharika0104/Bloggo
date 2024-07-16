// pages/editor.tsx
"use client"
import React from 'react';
import EditorComponent from "@/Components/EditorComponents/Editor";
import EditorNavbar from "@/Components/EditorComponents/EditorNavbar";


const Editor: React.FC = () => {
    return (
       <>
        <EditorComponent />
        </>
    );
};

(Editor as any).layout = null;
export default Editor;

// Set the custom layout for this page

