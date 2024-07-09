import './Contact.css';

export default function Contact() {
  return (
    <section className='viewport' id='contact-page'>
      <form id='contact'>
        <h2 className='contact-title'>Contact</h2>
        <p className='contact-p'>Blah blah blah contact me for things (Maggie will need to edit this message)</p>
        <div className='contact-upper'>
          <input placeholder='Name' className='contact-input'/>
          <input placeholder='Email' className='contact-input'/>
        </div>
        <input placeholder='Phone Number' className='contact-input' id='phone'/>
        <textarea placeholder='Message' className='contact-input' id='message'></textarea>

      </form>
    </section>
  )
}