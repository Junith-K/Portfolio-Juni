import { motion } from 'framer-motion';
import Circles from '/components/Circles';
import {BsArrowRight} from 'react-icons/bs';
import { useState } from 'react';
import {fadeIn} from '../../variants';
import ParticlesContainer from "../../components/ParticlesContainer";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "23f96c6b-842e-4e4f-abf8-233ec29ee961");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
  <div className='h-full bg-primary/30'>
    <Circles/>
    <ParticlesContainer />
    <div className='form-container mx-auto text-center xl:text-left h-full flex items-center justify-center'>
      <div className='flex max-md:mx-5 flex-col w-full max-w-[700px] z-30'>
        <motion.h2 
        variants={fadeIn('up',0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='h2 text-center mb-12'>
          Let&apos;s <span className='text-accent'>Connect..</span>
        </motion.h2>
        <motion.form 
        variants={fadeIn('up',0.4)}
        initial='hidden'
        animate='show'
        onSubmit={onSubmit}
        exit='hidden'
        className='flex flex-1 flex-col gap-6 w-full mx-auto'>
        <div className='flex gap-x-6 w-full'>
          <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} className='input' required/>
          <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} className='input' required/>
        </div>
          <input type='text' name='subject' placeholder='Subject' value={formData.subject} onChange={handleChange} className='input'/>
          <textarea name='message' placeholder='Message' value={formData.message} onChange={handleChange} className='textarea'></textarea>
          <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8
          transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0
            transition-all duration-300'>
              Let&apos;s talk!
            </span>
            <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
            group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
          </button>
        </motion.form>
      </div>
    </div>
  </div>
  );
};

export default Contact;
