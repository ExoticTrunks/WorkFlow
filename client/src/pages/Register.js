import { useState, useEffect } from "react"
import { Logo, FormRow, Alert } from '../components/'
import { useAppContext } from "../context/appContext"
import Wrapper from "../wrappers/RegisterPage"

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  //global state and useNavigate
  const {isLoading, showAlert, displayAlert } = useAppContext()

  const toggleMember = () => {
    setValues({...values, isMember:!values.isMember})
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name] : e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const {name, email, password, isMember} =  values
    if(!email || !password || (!isMember && !name)){
      displayAlert()
      return
    }
    console.log(values);
  }
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && <FormRow type='text' name = "name" value={values.name} handleChange = {handleChange}/>}
        {/* email input */}
        <FormRow type='email' name = "email" value={values.email} handleChange = {handleChange}/>
        {/* password input */}
        <FormRow type='password' name = "password" value={values.password} handleChange = {handleChange}/>
        <button type="submit" className="btn btn-block">Submit</button>
        <p>
        {values.isMember?'Not yet a member?': 'Already a member?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {!values.isMember ? 'Login': 'Register'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register