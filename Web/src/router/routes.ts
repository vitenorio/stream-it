import { HomeScreen } from './../screens/HomeScreen/HomeScreen';
import App from "../App"

export const unauthRoutes = [
  {
    key: 1,
    path: "/",
    component: HomeScreen
  },
  {
    key: 2,
    path: "/login",
    component: App // TODO change when login work
  },
]

export const allRoutes = [ 
  {
    key: 1,
    path: "/",
    component: HomeScreen
  },
  {
    key: 2,
    path: "/login",
    component: App // TODO change when login work
  },
  {
    key: 3,
    path: "/profile",
    component: App // TODO change when login work
  },
]
