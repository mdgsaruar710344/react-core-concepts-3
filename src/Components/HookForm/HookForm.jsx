import useInputState from "../../hooks/customHooks";


const HookForm = () => {
  const [email,setEmail]=useInputState('default Email')

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(email);
}


  return (
    <div>
      <div>
      <form onSubmit={handleSubmit}>
      <input type="text"  name="name" placeholder='Name' ></input>
      <br></br>
      <input type="email" value={email} onChange={setEmail} name="email" ></input>
      <br></br>
      <input type="text"   name="phone" placeholder='Phone' ></input>
      <br></br>
      <input type='password'  name="password" placeholder='Password' ></input>
      <br></br>
      <input type="submit" name="Submit" value="Sign Up"></input>
    </form>
    </div>
    </div>
  );
};

export default HookForm;