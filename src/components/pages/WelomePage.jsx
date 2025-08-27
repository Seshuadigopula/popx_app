import { Link } from 'react-router-dom'
import { Button } from '.././Button'
import PageTitle from '.././PageTitle'

export const WelcomePage = () => {
  return (
    <>
  
    
    <div className='home_container'>

      <div className="left_part">
       <PageTitle 
       headLine_1="Welcome to PopX" 
       paraLine_1="Lorem ipsum dolor sit amet" paraLine_2="Consectetur adipiscing elit." 
       />
      </div>

      <div className="right_part">
        <Link to="/signup_page">
        <Button btn_class='left_btn' btn_text='Create Account' 
        />
        </Link>
        <Link to="/login_page">
        <Button btn_class='right_btn' btn_text='Already Registered? Login' 
        />
        </Link>
      </div>

    </div>
    </>
  )
}