import React from 'react'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "89b4454b-e18b-45fe-bc18-4b7be90c48e0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message)
      setResult(data.message);
    }
  };
    return (
        <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact  <span className='underline underline-offset-4 decoration-1under font-light'>With Us</span></h1>
            <p className='text-center text-grey-500 mb-12 max-w-80mx-auto'>
                Real stories from real clients-Discover the impact of our services through their experiences.
            </p>
            <form onSubmit ={onSubmit} className='max-w-3xl mx-auto text-gray-600 pt-8'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                        <input className='w-full border border-grey-300 rounded py-3 px-4 mt-2 ' type="text" name='name' placeholder='your name' required />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
                        <input className='w-full border border-grey-300 rounded py-3 px-4 mt-2 ' type="email" name='email' placeholder='your email' required />
                    </div>
                </div>
                <div className='my-6 text-left'>
                    Message 
                    <textarea className='w-full border border-grey-300 rounded py-3 px-4 mt-2 h-32'
                     name="Message" placeholder='Message' required></textarea>
                </div>
                <button className='bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600'>{result ? result : "Send Message"}</button>
            </form>
            </div>
        )}

            export default Contact