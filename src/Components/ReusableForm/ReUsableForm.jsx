

const ReUsableForm = ({name, children, handleSubmit}) => {

  
  return (
    <div>
      <div>
        {children}
      <form onSubmit={handleSubmit}>
      <input type="text"  name="name" placeholder='Name' ></input>
      <br></br>
      <input type="email" name="email"  placeholder='Email' ></input>
      <br></br>
      <input type="text"   name="phone" placeholder='Phone' ></input>
      <br></br>
      <input type='password'  name="password" placeholder='Password' ></input>
      <br></br>
      <input type="submit" name="Submit" value={name}></input>
    </form>
    </div>
    </div>
  );
};

export default ReUsableForm;