import {useContext, useState} from 'react'
export const appContext = useContext()
const appContextWrapper = ({children}) => {
    const [movies, setMovies] = useState([]);
    const [user, setUser] = useState(null);
    cosnt [boo]
const value = {
    
}
  return (
    <appContext.provider value={value}>
        {children}
    </appContext.provider>
  )
}

export default appContextWrapper