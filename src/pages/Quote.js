// import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';

// export default function Quote() {
//     const form = useRef();
  
//     const sendEmail = (e) => {
//       e.preventDefault();
  
//       emailjs.sendForm('service_mldg2t8', 'template_mn47acp', form.current, 'kf9KEnKFIaFbIoUeI')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//     };
  
//     return (
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="user_name" />
//         <label>Email</label>
//         <input type="email" name="user_email" />
//         <label>Message</label>
//         <textarea name="message" />
//         <input type="submit" value="Send" />
//       </form>
//     );
//   };

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function Quote() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mldg2t8',
        'template_mn47acp',
        form.current,
        'kf9KEnKFIaFbIoUeI'
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            user_name: '',
            user_email: '',
            message: '',
          });
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='quote-container'>
    <form className='quote-form' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        value={formData.user_name}
        onChange={handleInputChange}
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        value={formData.user_email}
        onChange={handleInputChange}
      />
      <label>Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
      />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};