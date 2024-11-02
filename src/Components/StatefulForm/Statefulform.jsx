import { useEffect, useState } from "react";


const Statefulform = () => {
  const [email,setEmail]=useState('')
  const [name,setName]=useState('')
   const [phone,setPhone]=useState('')
   const [password,setPassword]=useState('')
   const[error,setError]=useState('')
   const[currenterror,setCurrentError]=useState('')
  

   const handleSubmit= (e)=>{
     e.preventDefault(); 
     console.log(email);
     console.log(name);
     console.log(phone);
     console.log(password);
     if(password.length<6){
      setError('Password is less than 6 characters')

     }
    
  }



  const handleEmail= (e)=>{
     const emailValue= e.target.value;
     console.log(emailValue);
       setName(emailValue);
  }
   const handleName= (e)=>{
 const nameValue= e.target.value;
       setEmail(nameValue);
  }
   const handlePhone= (e)=>{
 const phoneValue= e.target.value;
       setPhone(phoneValue);
  }
   const handlePassword= (e)=>{
 const passwordValue= e.target.value;
       setPassword(passwordValue);
       if(passwordValue.length<6){
        setCurrentError('Password is less than 6 characters') 
       }
       else{
        setCurrentError('')
       }
  }




  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleName}  name="name" placeholder='Name' ></input>
      <br></br>
      <input type="email" onChange={handleEmail} name="email" placeholder='Email' ></input>
      <br></br>
      <input type="text" onChange={handlePhone}  name="phone" placeholder='Phone' ></input>
      <br></br>
      <input type='password' onChange={handlePassword} name="password" placeholder='Password' ></input>
      <br></br>
      <input type="submit" name="Submit" value="Submit"></input>
    </form>
    {error? error:''}
    {currenterror? currenterror:''}
    </div>
  );
};

export default Statefulform;