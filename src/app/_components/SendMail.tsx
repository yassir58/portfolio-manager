import { useState } from "react";

const SendEmail:React.FC = ()=>{


    const [from, setFrom ] = useState ('')
    const [subject, setSubject ] = useState ('')
    const [text, setText ] = useState ('')
    // Inside your component or page

const sendMail = async ()=> {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: from,
          subject: subject,
          text: text,
        }),
      });
  
      if (response.ok) {
        console.log('Email sent successfully!');
      } else {
        console.error('Failed to send email:', response.statusText);
      }
   
  }
  
    return (
        <div className='w-full h-full flex flex-col justify-start items-start gap-4 p-6'>
            <h1 className='font-[600] text-2xl text-[#20293A]'>Send Email</h1>
            <div className='flex flex-col items-start justify-start gap-2 w-full'>
                <label className='font-[500]' htmlFor="email">Email</label>
                <input onChange={(e)=>setFrom (e.target.value)} type="email" id='email' className='primary-input' placeholder='Enter email'/>
            </div>
            <div className='flex flex-col items-start justify-start gap-2 w-full'>
                <label className='font-[500]' htmlFor="subject">Subject</label>
                <input onChange={(e)=>setSubject (e.target.value)} type="text" id='subject' className='primary-input' placeholder='Enter subject'/>
            </div>
            <div className='flex flex-col items-start justify-start gap-2 w-full'>
                <label className='font-[500]' htmlFor="message">Message</label>
                <textarea onChange={(e)=>setText (e.target.value)} name="message" id='message' className='primary-input h-[160px] w-full' placeholder='Enter message'/>
            </div>
            <button className='primary-btn'
            onClick={()=>{
                try{
                    void sendMail()
                }catch(err:unknown){
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    console.log (`Error: ${err}`)
                }
            }}
            >Send</button>
        </div>
    )
}

export default SendEmail;