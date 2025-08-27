import PageTitle from '../PageTitle'
import { Button } from '.././Button';
import { useNavigate } from 'react-router-dom';


const SignupPage = () => {
  const navigate = useNavigate();
  // const handleSubmit = (event) =>
  // {
  //   event.preventDefault();
  //   navigate('/profile_page');
  // };
  return (
    <div className="signup_container">
      
      <div className="signup_left_part">
       <PageTitle 
       headLine_1="Create your" 
       headLine_2="PopX account"
       />
      </div>

      <div className="signup_right_part">
        <form action={'/profile_page'}>
          <div className='input_feild'>
          <label htmlFor="name">Full Name</label>
           <input id='name' type="text" placeholder="Seshu Kumar" />
          </div>

          <div className="input_feild">
           <label htmlFor="phoneNumber">phone number</label>
           <input id='phoneNumber' type="text" placeholder="******1879" />
          </div>

          <div className='input_feild'>
          <label htmlFor="email">Email Address</label>
           <input id='email' type="email" placeholder="Enter Email address" />
          </div>

          <div className="input_feild">
           <label htmlFor="password">Password</label>
           <input id='password' type="password" placeholder="seshu145" />
          </div>

          <div className="input_feild">
           <label htmlFor="comapnyName">Company name</label>
           <input id='comapnyName' type="text" placeholder="PopX..." />
          </div>
          <div >
           <p>Are you an Agency?</p>
           <input type='radio' id='yes' name ="agency" value="yes"/>
           <label for="yes"> Yes            </label>
           <input type='radio' id='no' name ="agency" value="no"/>
           <label for="no"> No</label>
          </div>
          <Button btn_class='right_btn' btn_text='Create Account'/> 
       
          </form>
      </div>
    </div>
  )

}

export default SignupPage