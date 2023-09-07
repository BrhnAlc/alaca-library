import { createContext, useState, useContext } from "react"

//! 1- Theme Context'i olusuturuldu
const ThemeContext = createContext()

//! 2-Sarmalayici (Provider) Component
const ThemeProvider = ({ children }) => {
  // //! Local State
  const [user, setUser] = useState({ email: "", password: "" })

  const values = {
    user,
    setUser,
  }

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}

//! 3- consuming custom hook
export const useLoginContext = () => {
  return useContext(ThemeContext)
}

export default ThemeProvider
