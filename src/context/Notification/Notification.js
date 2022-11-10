import { createContext, useState } from 'react';
import './Notification.css'

const Notification = ( { msg, severity }) =>{

const notificationStyles = {
  position: 'fixed',
  top: 50,
  right: 10,
  padding: '10px 20px 10px 20px',
  background: severity === 'success' ? 'greenClass' : 'redClass',

}

  if(msg === '') return

  return(
  <div className={severity === 'success' ? 'greenClass' : 'redClass'} style={notificationStyles}>
    {msg}
  </div>
)
}

export const NotificationContext = createContext()

export const NotificationProvider = ( {children} ) => {

    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('seccess')
    
    const setNotification = (severity, msg) =>{
      setMessage(msg)
      setSeverity(severity)
    }

    setTimeout(()=> {
      setMessage('')
    }, 3000)

    return(
      <NotificationContext.Provider value={{ setNotification }}>
        <Notification msg={message} severity={severity}/>
          { children }
      </NotificationContext.Provider>
    )
  }