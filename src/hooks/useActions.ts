import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { allActionCreator } from "../store/reducers/action-creator"

// Для того, чтобы каждый раз не "диспатчить" authActionCreators
export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(allActionCreator, dispatch)
}
