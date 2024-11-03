
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
import HookForm from './Components/HookForm/HookForm'
import RefForm from './Components/RefForm/RefForm'
import ReuseableForm from './Components/ReusableForm/ReuseableForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {

  // const handleSignUpSubmit = (data) => {
  //   console.log('sign up data', data);
  // }

  // const handleUpdateProfile = (data) => {
  //   console.log('update profile', data);
  // }


  return (
    <section style={{backgroundColor: 'gray', maxHeight: 'full', padding: '20px'}}>

      <h1>Form Master</h1>

      <br />

      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      
      {/* <ReuseableForm formTitle={'Sign Up'}
      handleSubmit={handleSignUpSubmit}
      >
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign Up right now!</p>
        </div>
      </ReuseableForm>
      <ReuseableForm formTitle={'Profile Update'}
       
        handleSubmit={handleUpdateProfile} 
        submitBtnText='Update'>

        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated!</p>
        </div>

        </ReuseableForm> */}

    </section>
  )
}

export default App
