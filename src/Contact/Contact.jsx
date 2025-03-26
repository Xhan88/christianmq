import React from "react"
import "./Contact.css"


const Contact = React.forwardRef((props, ref) => {
  return (
    <>
    <div className="contact-data" ref={ref}>
           <h1 className="end-title"> 04. What’s Next?</h1>
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore reiciendis itaque placeat, illum veritatis praesentium a architecto eius dolorum voluptas minima aliquid, odio consequuntur optio at iste modi atque. Iusto!</p>
            <a href="mailto:christianmq888@gmail.com">
              <button className="btn-email">Say Hello</button>
            </a>
            
          </div>
          
            
          
   
   
    </>
  );
});

Contact.displayName = "Contact";
export default Contact
