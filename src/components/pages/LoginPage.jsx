import React from 'react'
import PageTitle from '../PageTitle'

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
        <form>
          <div className='input_feild'>
          <label htmlFor="email">Email Address</label>
           <input id='email' type="email" placeholder="Enter Email address" />
          </div>

          <div className="input_feild">
           <label htmlFor="password">Password</label>
           <input id='password' type="password" placeholder="Enter Password" />
          </div>
          <Link to={"/profile_page"}>
          <button type="submit">Login</button>
          </Link>
          </form>
      </div>

    </div>
  )
}

export default LoginPage