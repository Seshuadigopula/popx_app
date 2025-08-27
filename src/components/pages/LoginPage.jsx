import React from 'react'
import PageTitle from '../PageTitle'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

const LoginPage = () => {
  return (
    <div className='login_container'>

      <div className="login_left_part">
       <PageTitle 
       headLine_1="Signin to your" 
       headLine_2="PopX account"
       paraLine_1="Lorem ipsum dolor sit amet" paraLine_2="Consectetur adipiscing elit." 
       />
      </div>

      <div className="login_right_part">
        <form action="/profile_page">
          <div className='input_feild'>
          <label htmlFor="email">Email Address</label>
           <input id='email' type="email" placeholder="Enter Email address" />
          </div>

          <div className="input_feild">
           <label htmlFor="password">Password</label>
           <input id='password' type="password" placeholder="Enter Password" />
          </div>
            <Link to="/profile_page">
          <Button type="submit" btn_text="Login" />
          </Link>
          </form>
      </div>

    </div>
  )
}

export default LoginPage