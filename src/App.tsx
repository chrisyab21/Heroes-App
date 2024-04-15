import { onAuthStateChanged } from "firebase/auth"
import { FC, ReactNode, useContext, useEffect } from "react"
import { FireBaseAuth } from "./auth/firebase/config"
import { AuthContext } from "./context/contexts/AuthContext"
import { User } from "./context/providers/AuthProvider"

type props = {

  children: ReactNode

}

export const App: FC<props> = ({ children }) => {

  const { authState, login, logout } = useContext(AuthContext);

  useEffect(() => {

    onAuthStateChanged(FireBaseAuth, async (user) => {

      if (!user) return logout();

      const LoginData = {
        ok: true,
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        errorMessage: null
      }

      const LoginData2:User = {
        id: user.uid,
        name: user.displayName!,
        email: user.email!
      }

      //login(LoginData2);

    });

  }, []);


  return (
    <>
      {children}

    </>

  )
}
