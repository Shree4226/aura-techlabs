import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const ContactEmail = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    }); 

    const handleChange = async (e)=>{
        const {name,value} = e.target;
        setForm((prev)=>({...prev,[name]:value}));
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true); // Show loading state

        try{
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );
        

        alert('Message sent successfully!');
        setForm({name:'',email:'',message:''});
        }catch(error){
            console.error('EmailJS Error:',error); // Optional: show toast
            alert('Failed to send the message. Please try again later.');
        }finally{
            setLoading(false); // Always stop loading, even on error
        }
    };

    
  return (
    <div className='contact-email-card'>
        <form ref={formRef} onSubmit={handleSubmit} className='contact-email-form'>
            <input
            type='text'
            name='name'
            placeholder='Your name'
            value={form.name}
            onChange={handleChange}
            required/>

            <input
            type='email'
            name='email'
            placeholder='Your email'
            value={form.email}
            onChange={handleChange}
            required/>

            <textarea
            name='message'
            placeholder='Your message'
            rows='5'
            value={form.message}
            onChange={handleChange}
            required/>

            <button  type='submit' disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    </div>
  )
}

export default ContactEmail