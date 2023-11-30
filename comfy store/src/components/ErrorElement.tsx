import React from 'react'
import {useRouteError} from 'react-router-dom'

const ErrorElement = () => {
    const Error = useRouteError();
    console.log(Error)
  return (
  <h4 className='font-bold text-4xl'>there was an error... </h4>
  )
}

export default ErrorElement