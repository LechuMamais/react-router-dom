import { useParams } from 'react-router-dom';
import './Contact.css';

const Contact = () => {

  const { mail_to = 'alexismamais@gmail.com'} = useParams();
  const subject = 'Need a website';
  const body = "I'm contacting you because i need a webpage for my company";

  const mailtoLink = `mailto:${mail_to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className='contact'>
      <h1>Contact</h1>
      <h3>Need a website for your company?</h3>
      <button>
      <a href={mailtoLink}>  
          <p>Send email to</p>
          <p>{mail_to}</p>
      </a></button>
    </div>
  )
}

export default Contact