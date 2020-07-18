import App from "../App"
import { LoginScreen } from "../screens/Login/LoginScreen"
import { SignUpScreen } from "../screens/SignUp/SignUpScreen"

export const unauthRoutes = [
  {
    key: 1,
    path: "/Home",
    component: App
  },
]

export const allRoutes = [ 
  {
    key: 1,
    path: "/",
    component: LoginScreen
  },
  {
    key: 2,
    path: "/SignUp",
    component: SignUpScreen
  },
]
