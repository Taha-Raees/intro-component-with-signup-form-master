import React, { useState } from 'react'
import './Form.scss'
const Form = () => {
    const [values,setValues]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
    });
    const [error,setError]=useState(false)
    
  const handleSubmit=e=>{
    e.preventDefault();
    console.log(values);
    if(values.firstname.length==0 || values.lastname.length==0||values.email.length==0||values.password.length==0) {
        setError(true)
    }
   
  }
  
  
    return (
    <div className="Form">
        <div className="wrapper">
            <div className="right">
                <h1>Learn to code by watching others</h1>
                <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
            </div>
            <div className="left">
                <div className="annoucement"><h3>Try it free 7 days <span>then $20/mo. thereafter</span></h3></div>
                <div className="formcontainer">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='First Name'  value={values.firstname} onChange={(e)=> setValues({...values, firstname: e.target.value})}  />
                       {error && values.firstname.length<=0? <label htmlFor="">First Name cannot be empty<br/><img src={require('./icon-error.svg').default}/></label>
                        :''}
                        <input type="text" placeholder='Last Name' pattern='^[A-Za-z]' value={values.lastname} onChange={(e)=> setValues({...values, lastname: e.target.value})} />
                        {error && values.lastname.length<=0 ?<label htmlFor="">Last Name cannot be empty<br/><img src={require('./icon-error.svg').default}/></label>:''}
                        <input type="email" placeholder='Email' value={values.email} onChange={(e)=> setValues({...values, email: e.target.value})}/>
                        {error && values.email.length<=0 ?<label htmlFor="">Looks like this is not an email<br/><img src={require('./icon-error.svg').default}/></label>:''}
                        <input type="password" placeholder='Password' pattern='"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"' value={values.password} onChange={(e)=> setValues({...values, password: e.target.value})}/>
                        {error && values.password.length<=0 ?<label htmlFor="">Password cannot be empty<br/><img src={require('./icon-error.svg').default}/></label>:''}
                        <button >Claim your free trial</button>
                        <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form