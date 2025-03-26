import React from "react"
import "./Contact.css"


const Contact = React.forwardRef((props, ref) => {
  return (
    <>
    <div className="contact-data" ref={ref}>
           <h1 className="end-title"> 04. What’s Next?</h1>
            <h2>Get In Touch</h2>
            <p>I`m currently looking for new opportunities, so my inbox is always open. If you have any questions or just want to say hello, I`ll do my best to get back to you.</p>
            <a href="mailto:christianmq888@gmail.com">
              <button className="btn-email">Say Hello</button>
            </a>
            
          </div>
          
            
          
   
   
    </>
  );
});

Contact.displayName = "Contact";
export default Contact
