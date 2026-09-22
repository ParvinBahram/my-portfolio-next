"use client"

import { useState } from "react"

function ContactForm() {
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [message,setMessage]= useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        setName("");
        setEmail("");
        setMessage("");
        alert("پیام ارسال شد")
    }
  return (
    <div className="w-full" dir="rtl">
        <p className="text-start px-8 mb-4">اگر نیاز به راهنمایی دارید برای مشاوره رایگان برای ما پیام بذارید تا در اولین فرصت با شما تماس بگیریم</p>
        <form action="" className="flex flex-col gap-6  mx-auto pr-8" onSubmit={handleSubmit} >
            <div className="">
            <label htmlFor="">نام</label>
            <input value={name} type="text"  className="form-input " onChange={(e)=>setName(e.target.value)} required/>
            </div>
           <div className="">
            <label htmlFor="">شماره یا ایمیل</label>
            <input value={email} type="text" className="form-input" onChange={(e)=>setEmail(e.target.value)} required />
           </div>
           <div className="">
            <label htmlFor="">پیام</label>
            <textarea value={message} className="form-input max-h-32"  onChange={(e)=>setMessage(e.target.value)} required></textarea>
           </div>
            <button className="rounded bg-secondary w-full py-1 mx-auto" >ارسال</button>
        </form>
    </div>
  )
}

export default ContactForm