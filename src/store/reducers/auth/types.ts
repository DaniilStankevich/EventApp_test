export interface AuthState {
    isAuth: boolean
}



// Перечисления 
export enum  AuthActionsEnym {
    SET_AUTH = "SET_AUTH"
}

// Поля экшена
export interface SetAuthAction {
    type: AuthActionsEnym.SET_AUTH;  //вместо прямого "хардкожения" строки
    payload: boolean
}


// Обобщающий тип для всех интерфейсов
export type AuthAction = SetAuthAction