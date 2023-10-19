import { TypedUseSelectorHook, useSelector } from "react-redux"
import { RootState } from "../store"

// Хук для того чтобы сразу видеть каки есть редюсеры и поля "автокомплит"
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector
