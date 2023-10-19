import axios from "axios"
import { IUser } from "../../../models/IUser"
import {
  AuthActionsEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from "./types"
import { AppDispatch } from "../../index"
import UserService from "../../../api/UserService"

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),

  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: auth,
  }),

  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionsEnum.SET_IS_LOADING,
    payload,
  }),

  setError: (payload: string): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload,
  }),

  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true))
        setTimeout(async () => {
          const response = await UserService.getUseres()

          const mockuser = response.data.find(
            (user) => user.username === username && user.password === password
          )
          if (mockuser) {
            localStorage.setItem("auth", "true")
            localStorage.setItem("username", mockuser.username)
            dispatch(AuthActionCreators.setIsAuth(true))
            dispatch(AuthActionCreators.setUser(mockuser))
          } else {
            dispatch(
              AuthActionCreators.setError("Некорректный логин или пароль")
            )
          }
          dispatch(AuthActionCreators.setIsLoading(false))
          //console.log(mockuser , '- вот он')
        }, 0)
      } catch (e) {
        dispatch(AuthActionCreators.setError("Произошла ошибка"))
      }
    },

  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem("auth")
    localStorage.removeItem("username")
    dispatch(AuthActionCreators.setUser({} as IUser))
    dispatch(AuthActionCreators.setIsAuth(false))
  },
}
