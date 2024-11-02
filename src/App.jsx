
import './App.css'
import Grandpa from './Components/ContextAPI/Grandpa'
import HookForm from './Components/HookForm/HookForm'
import ReUsableForm from './Components/ReusableForm/ReUsableForm'
import Statefulform from './Components/StatefulForm/Statefulform'

function App() {
  // function handleSignUp(e) {
  //   e.preventDefault();
  //   console.log(e.target.email.value)
  // }

  // function handleLogIn(e) {
  //   e.preventDefault();
  //   console.log(e.target.email.value)
  // }

  return (
    <>
    <h1>react</h1>
      {/* <Statefulform ></Statefulform> */}
     {/* <HookForm></HookForm> */}
    {/* <ReUsableForm name='Sign Up' handleSubmit={handleSignUp}>
    <div> Sign Up Form.
      <br></br>
      Please Sign Up Now!
    </div>

    </ReUsableForm>
    <hr></hr>
    <ReUsableForm name='Log In' handleSubmit={handleLogIn}>
      <div>
        This is a log in Form
      </div>
    </ReUsableForm>
     */}

      <Grandpa></Grandpa>
    </>
  )
}

export default App
