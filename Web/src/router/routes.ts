import App from "../App"
import { LoginScreen } from "../screens/Login/LoginScreen"

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
]
