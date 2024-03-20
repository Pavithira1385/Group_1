import React, { useState } from 'react';
import "./Contact.css"

const ContactForm = () => {
	const[fname,setFname] = useState('')
	const[lname,setLname] = useState('')
	const[phone,setPhone] = useState('')
	const[email,setEmail] = useState('')
	const[subject,setSubject] = useState('')
	const[company,setCompany] = useState('')
	const[message,setMessage] = useState('')

	const[allValue,setAllValue] = useState()

	const formSubmit = (e) => {
		e.preventDefault()
		const newValue = {fname, lname, phone, email, subject, company, message}
		setAllValue([...allValue,newValue])

		setFname("")
		setLname("")
		setPhone("")
		setEmail("")
		setSubject("")
		setCompany("")
		setMessage("")

	}
  return (
	<>
	<section className='contact mtop'>
		<div className='container flex'>
			<div className='main-content'>
				<h2>Contact Form</h2>
				<p>Fill out the form below, we will get back you soon.</p>

				<form onSubmit={formSubmit}>
					<div className='grid1'>
						<div className='input'>
							<span>
								First Name <label>*</label>
							</span>
							<input type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)}/>
						</div>

						<div className='input'>
							<span>
								Last Name <label>*</label>
							</span>
							<input type='text' name='lname' value={lname} onChange={(e) => setLname(e.target.value)}/>
						</div>

						<div className='input'>
							<span>
								Phone <label>*</label>
							</span>
							<input type='text' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
						</div>

						<div className='input'>
							<span>
								E-mail <label>*</label>
							</span>
							<input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
						</div>

						<div className='input'>
							<span>
								Subject <label>*</label>
							</span>
							<input type='text' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)}/>
						</div>

						<div className='input'>
							<span>
								Your Company <label>*</label>
							</span>
							<input type='text' name='company' value={company} onChange={(e) => setCompany(e.target.value)}/>
						</div>

						<div className='input inputlast'>
							<span>
								Write Your Message <label>*</label>
							</span>
							<textarea name='message' value={message} cols='30' rows='10' onChange={(e) => setMessage(e.target.value)}/>
						</div>
					</div>
					<button className='primary-btn'>Submit Now</button>
				</form>

				<div className='side-content'>
					<h3>Visit Our Location</h3>
					<p>Hotels are establishments that provide temporary lodging,
						 typically on a short-term basis. They offer accommodation,
						  amenities, and often other services to travelers or guests.</p>
						  <br/>
						  <h3>Message Us</h3>
						  <span>rajeenthanrajaratnam0005@hotmail.com</span>
						  <br/>
						 
						  <span>+94 77 445 5503</span>
						  <br/>

						  <div className='icon'>
							<h3>Follow Us</h3>
							<div className='flex_space'>
								<i className='fab fa-facebook-f'></i>
								<i className='fab fa-twitter-f'></i>
								<i className='fab fa-linkedin-f'></i>
								<i className='fab fa-instagram-f'></i>
							</div>
						  </div>
				</div>
			</div>
		</div>
	</section>

	<section className='show-data'>
		{
			allValue.map((currentValue) => {
				const {fname,lname,phone,email,subject,company,message} = currentValue
				return(

		<div className='sign-box'>
			<h1>Send Successfully!</h1>
			<h3>
				First Name : <p>{fname}</p>
			</h3>

			<h3>
				Last Name : <p>{lname}</p>
			</h3>

			<h3>
				Phone No : <p>{phone}</p>
			</h3>

			<h3>
				E-mail : <p>{email}</p>
			</h3>

			<h3>
				Subject : <p>{subject}</p>
			</h3>

			<h3>
				Company : <p>{company}</p>
			</h3>

			<h3>
				Meaasge : <p>{message}</p>
			</h3>
		</div>
			)
		})
	}
	</section>
	</>
  );
}

export default ContactForm;
