import {useContext} from 'react'
export const appContext = useContext()
const appContextWrapper = ({children}) => {
const value = {
    
}
  return (
    <appContext.provider value={value}>
        {children}
    </appContext.provider>
  )
}

export default appContextWrapper