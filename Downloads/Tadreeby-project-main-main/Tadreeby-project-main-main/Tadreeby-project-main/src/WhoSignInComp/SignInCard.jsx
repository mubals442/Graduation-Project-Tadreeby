import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'





function SignInCard(props) {

    const linkPage = props.linkPage;
    const nameCard = props.nameCard;

    const hoverColor = props.hoverColor;


  return (
        <>
          <Link to={linkPage}  className='block'>
              <div className={`max-w-sm bg-gray-100 dark:bg-gray-900 border border-gray-200 rounded-lg shadow dark:border-gray-700 hover:bg-${hoverColor}-100`}>
                      <img className="rounded-t-lg" src={props.imageLogo} alt="" />
                  <div className = {`p-5 bg-${props.bgc} rounded-b-lg `} >
                          <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-white dark:text-whit">{nameCard}</h5>
                  </div>
              </div>        
          </Link>
        </>
  )
}

export default SignInCard;

