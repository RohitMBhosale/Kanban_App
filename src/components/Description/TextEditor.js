import React from "react";
import { useQuill } from "react-quilljs";
import 'quill/dist/quill.snow.css';


export default function TextEditor() {
  const { quill, quillRef } = useQuill();

  return (
    <div>
      <div 
      style={{ width: 500, height: 150,background:'white' , position:"absolute"}}>
        <div  style={{background:'white'}} 
        ref={quillRef} />
      </div>
    </div>
  );
};