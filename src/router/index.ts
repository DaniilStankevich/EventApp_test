import Events from "../pages/Events"
import Login from "../pages/Login"

export interface IRoute {
    path: string
    component: React.ComponentType
    exact?: boolean
}


// Для оптимизации можно менять только значения "словаря"
export enum RouteNames {
    LOGIN = '/LOGIN',
    EVENT = '/'
}



export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN,   exact: true, component: Login  }
]


export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, exact: true, component: Events  }
]