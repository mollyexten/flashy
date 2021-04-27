import "./SignIn.css";
import Layout from "../../components/shared/Layout/Layout"
import { useState } from "react"
// import { signIn } from '../../services/users'
import { useHistory } from 'react-router-dom';


export default function SignIn(props) {
  const history = useHistory()

  const [form, setForm] = useState({
    username: '',
    password: '',
    isError: false,
    errorMsg: ''
  })

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }
  
  // const onSignIn = event => {
  //   event.preventDefault()
  //   const { setUser } = props

  //   signIn(form)
  //           .then(user => {
  //               setUser(user)
  //           })
  //           .then(() => history.push('/'))
  //           .catch(error => {
  //               console.error(error)
  //               setForm({
  //                   isError: true,
  //                   errorMsg: 'Invalid Credentials',
  //                   username: '',
  //                   password: ''
  //               })
  //           })
  // }

  // const renderError = () => {
  //   const toggleForm = form.isError ? 'danger' : ''
  //   if (form.isError) {
  //     return (
  //       <button type="submit" className={toggleForm}>
  //         {form.errorMsg}
  //       </button>
  //     )
  //   } else {
  //     return <button type="submit" className="signin-submit">sign in</button>
  //   }
  // }

  const { username, password } = form

  return (
    <Layout>
      <div className="signin-form">
            <h3 className="signin-header">sign in</h3>
            <form className="signin-container" /*onSubmit={onSignIn}*/>
                <input
            required
            type="text"
            className="signin-username"
                    name="username"
                    value={username}
                    placeholder="username"
                    onChange={handleChange}
                />
                <input
                    required
                    name="password"
                    value={password}
            type="password"
            className="signin-password"
                    placeholder="password"
                    onChange={handleChange}
                />
                {/* {renderError()} */}
            </form>
        </div>
    </Layout>
  )
}